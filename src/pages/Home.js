import { useEffect, useState } from "react";

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
    CardSlide()
  }, []);

  return (
    <>
      {loading ? (
        <h1>로딩중</h1>
      ) : (
        <>
        <div className="gallery">
        <ul className="cards">
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
        <div className="actions">
          <button className="prev">Prev</button>
          <button className="next">Next</button>
        </div>
      </div>
      <div className="drag-proxy"></div>
        </>
      )}
    </>
  );
}
export default Home;
