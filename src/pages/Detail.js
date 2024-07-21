import { useParams } from "react-router-dom";

/* css import */
import style from "../styles/pages/detail.scss";
import ProjectDetail from "../components/ProjectDetail";
import Data from "../data/project.json";

function Detail() {
  const {id} = useParams();

  return (
    <>
      {Data
      .filter((selId) =>selId.nameAbbr == id)
      .map((project) => (
        <ProjectDetail
          category={project.category}
          period={project.period}
          client={project.client}
          name={project.name}
          nameAbbr={project.nameAbbr}
          imageCount={project.imageCount}
          descriptions={project.descriptions}
          keyword={project.keyword}
          demo={project.demo}
        />
      ))}
    </>
  );
}
export default Detail;
