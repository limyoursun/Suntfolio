import { useEffect, useState, useLayoutEffect, isWindow } from "react";

/* css import */
import style from "../styles/Home.module.scss";

/* component import */
import Project from "../components/ProjectList";
import Loading from "../components/Loading";
import Data from "../data/project.json";

function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {/* {loading ? (
        <Loading />
      ) : ( */}
        <div>
          <div className="gallery">
            <ul className={`cards ${style.project}`}>
              {Data.map((project) => (
                <Project
                  id={project.id}
                  category={project.category}
                  period={project.period}
                  client={project.client}
                  name={project.name}
                  image={project.image}
                  image1={project.image1}
                  image2={project.image2}
                  image3={project.image3}
                  description={project.description}
                  description1={project.description1}
                  description2={project.description2}
                  description3={project.description3}
                  skill={project.skill}
                  keyword={project.keyword}
                  demo={project.demo}
                  github={project.github}
                  color={project.color}
                  subColor={project.subColor}
                  icon={project.icon}
                />
              ))}
            </ul>
            <div className="actions">
              <button className="btn_prev">이전 프로젝트</button>
              <button className="btn_next">다음 프로젝트</button>
            </div>
          </div>
          <div className="drag-proxy"></div>
        </div>
      {/* )} */}
    </>
  );
}
export default Home;
