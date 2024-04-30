import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/* css import */
import style from "../styles/Detail.module.scss";

/* component import */
import ProjectDetail from "../components/ProjectDetail";

function Detail() {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const container = useRef();
  
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

  useGSAP(() => {
    gsap.to(".good", {rotation:360, duration:2, repeat: -1, repeatDelay: 2, ease:"bounce.out"}); 
  }, {scope: container})

  return (
    <>
      <div ref={container}>
        <div className="good"></div>
      </div>
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
              period={project.period}
              name={project.name}
              description={project.description}
              skill={project.skill}
              demo={project.demo}
              image={project.image}
              theme={project.theme}
              design={project.design}
              publishing={project.publishing}
            />
          ))}
        </>
      )}
    </>
  );
}
export default Detail;
