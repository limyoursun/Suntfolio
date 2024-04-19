import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* css import */
import style from "../styles/Detail.module.scss";

/* component import */
import ProjectDetail from "../components/ProjectDetail";

function Detail() {
  const id  = useParams();
  console.log("ID : " + id);

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

  const result = projects.filter(project => project.id === id);
  console.log(result)
  console.log(id)

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul className={style.project}>
            <ProjectDetail
              id={result.id}
              category={result.category}
              name={result.name}
              image={result.image}
              description={result.description}
              demo={result.demo}
              test={result.test}
            />
        </ul>
      )}
    </>
  );
}
export default Detail;
