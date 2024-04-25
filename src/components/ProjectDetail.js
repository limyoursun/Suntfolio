import { Link } from "react-router-dom";

/* css import */
import style from "../styles/Detail.module.scss";

/* icon import */
import { ArrowRight, VectorPen, CodeSquare } from "react-bootstrap-icons";

/* component import */
import BtnBack from "../components/BtnBack";

function ProjectDetail({
  category,
  period,
  name,
  description,
  skill,
  demo,
  image,
  theme,
  design,
  publishing,
}) {
  return (
    <>
      <section>
        <BtnBack className="icon" />
        <aside className={`${style.detail_side}`}>
          <div className={style.tumb} style={{ backgroundColor: `${theme}` }}>
            <img src={image} alt={name} />
          </div>
          <span>{category}</span>
          <em>{period}</em>
          <h2>{name}</h2>
          <ul className="builtwith_wrap">
            {skill.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <p>{description}</p>
          <Link to={demo} className="btn_site">
            <ArrowRight className="icon" />
          </Link>
        </aside>
      </section>
      <section className={style.detail_con}>
        <ul>
          <li>
            주요 기능
            <VectorPen className="icon" />
          </li>
          <li>
            디자인 관련
            <VectorPen className="icon" />
          </li>
          <li>
            코딩 관련
            <CodeSquare className="icon" />
          </li>
        </ul>
        <div>
          <p>{design}</p>
          <p>{publishing}</p>
        </div>
      </section>
    </>
  );
}

export default ProjectDetail;
