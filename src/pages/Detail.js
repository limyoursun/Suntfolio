import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* css import */
import style from "../styles/Detail.module.scss";

/* component import */
import ProjectDetail from "../components/ProjectDetail";

function Detail() {
  const {id} = useParams();
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
        <>
          {projects
          .filter((selId) =>selId.id == id)
          .map((project) => (
            <ProjectDetail
              id={project.id}
              category={project.category}
              name={project.name}
              image={project.image}
              description={project.description}
              demo={project.demo}
              test={project.test}
            />
          ))}
        </>
      )}
    </>
  );
}
export default Detail;
