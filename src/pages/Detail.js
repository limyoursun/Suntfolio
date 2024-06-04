import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* css import */
import style from "../styles/Detail.module.scss";

/* component import */
import Loading from "../components/Loading";
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
        <Loading/>
      ) : (
        <>
          {projects
          .filter((selId) =>selId.id == id)
          .map((project) => (
            <ProjectDetail
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
        </>
      )}
    </>
  );
}
export default Detail;
