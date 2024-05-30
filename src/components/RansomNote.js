function RansomNote(){
      // 넓은 공백 문자
      const wideSpace = '\u2002'; // 넓은 공백 문자

      // 랜덤 색상을 생성하는 함수
      function getRandomColor() {
          const letters = '0123456789ABCDEF';
          let color = '#';
          for (let i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
      }
  
      // 색상 대비를 계산하는 함수
      function getLuminance(hexColor) {
          const r = parseInt(hexColor.substr(1, 2), 16) / 255;
          const g = parseInt(hexColor.substr(3, 2), 16) / 255;
          const b = parseInt(hexColor.substr(5, 2), 16) / 255;
          const a = [r, g, b].map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
          return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
      }
  
      function getContrastRatio(color1, color2) {
          const lum1 = getLuminance(color1);
          const lum2 = getLuminance(color2);
          const brightest = Math.max(lum1, lum2);
          const darkest = Math.min(lum1, lum2);
          return (brightest + 0.05) / (darkest + 0.05);
      }
  
  
      // 랜덤 폰트 패밀리를 생성하는 함수
      function getRandomFontFamily() {
          const fontFamilies = ['fantasy', 'cursive', 'math', 'serif', 'monospace', 'sans-serif'];
          return fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
      }
  
      // 랜섬 노트 스타일을 적용하는 함수
      function applyRansomNoteStyle() {
          const elements = document.querySelectorAll('.ransom-note');
          elements.forEach(element => {
              const text = element.textContent;
              element.innerHTML = ''; // 기존 텍스트를 비웁니다.
  
              for (let char of text) {
                  if (char === ' ') {
                      // 넓은 공백 문자를 추가하여 공백을 더 넓게 만듭니다.
                      element.appendChild(document.createTextNode(wideSpace.repeat(3)));
                  } else {
                      const span = document.createElement('span');
                      span.textContent = char;
  
                      let bgColor = getRandomColor();
                      let textColor = getRandomColor();
                      while (getContrastRatio(bgColor, textColor) < 4.5) {
                          textColor = getRandomColor();
                      }
  
                      span.style.backgroundColor = bgColor;
                      span.style.color = textColor;
                      span.style.fontFamily = getRandomFontFamily();
                      element.appendChild(span);
                  }
              }
          });
      }
  
      applyRansomNoteStyle();
}

export default RansomNote;