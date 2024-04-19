import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
              name={project.name}
              image={project.image}
              description={project.description}
              demo={project.demo}
              test={project.test}
            />
          ))}
        </ul>
      )}
    </>
  );
}
export default Home;
