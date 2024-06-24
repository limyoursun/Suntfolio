import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* css import */
import style from "../styles/pages/detail.scss";

// import Loading from "../components/Loading";
import ProjectDetail from "../components/ProjectDetail";
import Data from "../data/project.json";

function Detail() {
  const {id} = useParams();
  // const [loading, setLoading] = useState(true);

  return (
    <>
      {/* {loading ? (
        <Loading/>
      ) : (
        <> */}
          {Data
          .filter((selId) =>selId.id == id)
          .map((project) => (
            <ProjectDetail
              id={project.id}
              category={project.category}
              period={project.period}
              client={project.client}
              name={project.name}
              image={project.image}
              description={project.description}
              descriptions={project.descriptions}
              skill={project.skill}
              keyword={project.keyword}
              demo={project.demo}
              github={project.github}
              color={project.color}
              subColor={project.subColor}
              icon={project.icon}
              nameAbbr={project.nameAbbr}
              imageCount={project.imageCount}
            />
          ))}
        {/* </>
      )} */}
    </>
  );
}
export default Detail;
