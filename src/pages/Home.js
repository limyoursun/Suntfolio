import { useEffect, useState } from "react";

/* css import */
import style from "../styles/Home.module.scss";

/* component import */
import Project from "../components/ProjectList";
import Loading from "../components/Loading";

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

  return (
    <>
      {loading ? (
        <Loading/>
      ) : (
        <>
        <div className="gallery">
        <ul className={`cards ${style.project}`} >
          {projects.map((project) => (
            <Project
              id={project.id}
              category={project.category}
              client={project.client}
              name={project.name}
              description={project.description}
              test={project.skill}
              demo={project.demo}
              image={project.image}
              theme={project.themeColor}
              subTheme={project.SubthemeColor}
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
        </>
      )}
    </>
  );
}
export default Home;
