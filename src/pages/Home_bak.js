import { useEffect, useState } from "react";

/* css import */
import style from "../styles/Home.module.scss";

/* component import */
import Project from "../components/ProjectList";

function Home() {
  const [loading, setLoading] = useState(true);
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
        <h1>Loading...</h1>
      ) : (
        <ul className={style.project}>
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
              theme={project.theme}
              icon={project.icon}
            />
          ))}
        </ul>
      )}
      
    </>
  );
}
export default Home;
