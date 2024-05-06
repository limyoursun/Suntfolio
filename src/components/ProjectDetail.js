import { Link } from "react-router-dom";

/* css import */
import style from "../styles/Detail.module.scss";

/* icon import */
import { ArrowRight } from "react-bootstrap-icons";
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
            이곳은 프로젝트에 대한 자세한 설명과 함께, 제가 맡은 역할과 작업한
            범위를 구체적으로 기재합니다.
            <br />
            프로젝트에서 사용한 기술과 도구에 대해서도 간략하게 소개해드립니다.
            <br />
            프로젝트를 작업하며 신경 쓴 주요 기능과 화면을 직접 확인하실 수
            있어요!
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
