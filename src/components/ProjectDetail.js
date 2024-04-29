import { Link } from "react-router-dom";

/* css import */
import style from "../styles/Detail.module.scss";

/* icon import */
import {
  ArrowRight,
  VectorPen,
  CodeSquare,
  Github,
} from "react-bootstrap-icons";
import * as Icons from "react-bootstrap-icons";

/* component import */
import BtnBack from "../components/BtnBack";

function ProjectDetail({
  period,
  name,
  description,
  skill,
  demo,
  image,
  theme,
  design,
  publishing,
  icon,
}) {
  const IconComponent = Icons[icon];

  return (
    <>
      <section className={style.detail_con}>
        <aside>
          <BtnBack className="icon" />
          <p>
            프로젝트 작업물의 상세 설명입니다.
            <br />
            각각의 작업물에 진심을 담아서 작업합니다~
          </p>
        </aside>
        <article>
          <div className={style.con_info}>
            <div>
              <h2>
                {IconComponent && <IconComponent />}
                {name}
              </h2>
              <ul className="builtwith_wrap">
                {skill.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <em>{period}</em>
              <p>{description}</p>
            </div>
            <Link to={demo} className="btn_site">
              <ArrowRight className="icon" />
            </Link>
          </div>
          <ul>
            <li>
              <div
                className={style.tumb}
                style={{ backgroundColor: `${theme}` }}
              >
                <img src={`../images/${image}`} alt={name} />
              </div>
            </li>
            <li>
              <p>{publishing}</p>
            </li>
            <li>
              <p>{design}</p>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}

export default ProjectDetail;
