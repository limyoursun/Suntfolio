import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

const CardSlide = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(Draggable);

  let iteration = 0;

  gsap.set(".cards li", { xPercent: 400, opacity: 0, scale: 0 });

  const spacing = 0.1,
    snapTime = gsap.utils.snap(spacing),
    cards = gsap.utils.toArray(".cards li"),
    animateFunc = (element) => {
      const tl = gsap.timeline()
      tl.fromTo(
        element,
        { scale: 0.3, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          zIndex: 100,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          ease: "power1.in",
          immediateRender: false,
        }
      ).fromTo(
        element,
        { xPercent: 300, duration: 0},
        { xPercent: -300, duration: 1, ease: "none", immediateRender: false },
        0
      );
      return tl;
    },
    seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc),
    playhead = { offset: 0 },
    wrapTime = gsap.utils.wrap(0, seamlessLoop.duration()),
    scrub = gsap.to(playhead, {
      offset: 0,
      onUpdate() {
        seamlessLoop.time(wrapTime(playhead.offset));
      },
      duration: 0.6,
      ease: "power3",
      paused: true,
    }),
    trigger = ScrollTrigger.create({
      start: 0,
      onUpdate(self) {
        let scroll = self.scroll();
        if (scroll > self.end - 1) {
          wrap(1, 2);
        } else if (scroll < 1 && self.direction < 0) {
          wrap(-1, self.end - 1);
        } else {
          scrub.vars.offset = (iteration + self.progress) * seamlessLoop.duration();
          scrub.invalidate().restart(); // to improve performance, we just invalidate and restart the same tween. No need for overwrites or creating a new tween on each update.
        }
      },
      end: "+=3000",
      pin: ".gallery",
    }),
    progressToScroll = (progress) =>
      gsap.utils.clamp(
        1,
        trigger.end - 1,
        gsap.utils.wrap(0, 1, progress) * trigger.end
      ),
    wrap = (iterationDelta, scrollTo) => {
      iteration += iterationDelta;
      trigger.scroll(scrollTo);
      trigger.update();
    };

  ScrollTrigger.addEventListener("scrollEnd", () =>
    scrollToOffset(scrub.vars.offset)
  );

  function scrollToOffset(offset) {
    let snappedTime = snapTime(offset),
      progress =
        (snappedTime - seamlessLoop.duration() * iteration) /
        seamlessLoop.duration(),
      scroll = progressToScroll(progress);
    if (progress >= 1 || progress < 0) {
      return wrap(Math.floor(progress), scroll);
    }
    trigger.scroll(scroll);
  }

  const nextButton = document.querySelector(".btn_next");
  const prevButton = document.querySelector(".btn_prev");

  if (nextButton && prevButton) {
    nextButton.addEventListener("click", nextHandler);
    prevButton.addEventListener("click", prevHandler);
  }

  function nextHandler() {
    scrollToOffset(scrub.vars.offset + spacing);
  }

  function prevHandler() {
    scrollToOffset(scrub.vars.offset - spacing);
  }

  function buildSeamlessLoop(items, spacing, animateFunc) {
    let rawSequence = gsap.timeline({ paused: true }),
      seamlessLoop = gsap.timeline({
        paused: true,
        repeat: -1,
        onRepeat() {
          this._time === this._dur && (this._tTime += this._dur - 0.01);
        },
      }),
      cycleDuration = spacing * items.length,
      dur;

    items
      .concat(items)
      .concat(items)
      .forEach((item, i) => {
        let anim = animateFunc(items[i % items.length]);
        rawSequence.add(anim, i * spacing);
        dur || (dur = anim.duration());
      });

    seamlessLoop.fromTo(
      rawSequence,
      {
        time: cycleDuration + dur / 2,
      },
      {
        time: "+=" + cycleDuration,
        duration: cycleDuration,
        ease: "none",
      }
    );
    return seamlessLoop;
  }

  Draggable.create(".drag-proxy", {
    type: "x",
    trigger: ".cards",
    onPress() {
      this.startOffset = scrub.vars.offset;
    },
    onDrag() {
      scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.001;
      scrub.invalidate().restart();
    },
    onDragEnd() {
      scrollToOffset(scrub.vars.offset);
    },
  });

  const savedOffset = localStorage.getItem("scrollOffset");
  if (savedOffset) {
    scrollToOffset(parseFloat(savedOffset));
  }

  return () => {
    localStorage.setItem("scrollOffset", scrub.vars.offset);

    if (nextButton && prevButton) {
      nextButton.removeEventListener("click", nextHandler);
      prevButton.removeEventListener("click", prevHandler);
    }
    ScrollTrigger.removeEventListener("scrollEnd", scrollToOffset);
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const draggableInstances = Draggable.get(".drag-proxy");
    if (draggableInstances) {
      if (Array.isArray(draggableInstances)) {
        draggableInstances.forEach(drag => drag.kill());
      } else {
        draggableInstances.kill();
      }
    }

  };
};

export default CardSlide;
