/* css import */
import "../styles/pages/home.scss";
/* component import */
import Project from "../components/ProjectList";
import Data from "../data/project.json";

function Home() {
  return (
    <div>
      <div className="gallery">
        <ul className="cards project">
          {Data.map((project) => (
            <Project
              key={project.nameAbbr}
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
  );
}
export default Home;
