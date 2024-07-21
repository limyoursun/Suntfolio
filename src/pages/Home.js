import { useEffect, useState, useLayoutEffect, isWindow } from "react";

/* css import */
import style from "../styles/pages/home.scss";
/* component import */
import Project from "../components/ProjectList";
// import Loading from "../components/Loading";
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
            <ul className="cards project">
              {Data.map((project) => (
                <Project
                  category={project.category}
                  period={project.period}
                  client={project.client}
                  name={project.name}
                  nameAbbr={project.nameAbbr}
                  description={project.description}
                  demo={project.demo}
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
