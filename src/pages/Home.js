import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "https://cdn.skypack.dev/gsap@3.7.0/ScrollTrigger";
import Draggable from "https://cdn.skypack.dev/gsap@3.7.0/Draggable";

/* css import */
import style from "../styles/Home.module.scss";

/* component import */
import Project from "../components/ProjectList";
import CardSlide from "../components/CardSlide";

function Home() {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const json = await (
      await fetch(
        `https://raw.githubusercontent.com/limyoursun/limyoursun.github.io/main/api/projects.json`
      )
    ).json();
    setProjects(json);
    setLoading(false);
  };

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    CardSlide()
  }, []);

  return (
    <>
      <div class="gallery">
        <ul class="cards">
          <li>0</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
        </ul>
        <div class="actions">
          <button class="prev">Prev</button>
          <button class="next">Next</button>
        </div>
      </div>
      <div class="drag-proxy"></div>
    </>
  );
}
export default Home;
