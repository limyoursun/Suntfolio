import { Link } from "react-router-dom";

/* css import */
import style from "../styles/Detail.module.scss";

/* icon import */
import { HouseDoorFill } from "react-bootstrap-icons";
import * as Icons from "react-bootstrap-icons";

function ProjectDetail({
  client,
  category,
  name,
  image,
  description,
  demo,
  theme,
  subTheme,
  icon,
  period,
  skill,
  design,
  publishing
}) {
  const IconComponent = Icons[icon];

  return (
    <>
      <section className={style.detail_con} >
        <div>
          <h4 className={style.title}>Title</h4>
          <h3 className={style.main_title}>Title</h3>
          <p className={style.paragraph}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
        <div className={style.con_info}>
          <span>{client}</span>
          <span>{category}</span>
          <h3>{name}</h3>
          <p>{description}</p>
          <Link to={demo}>demo</Link>
          <ul>
            <li>{theme}</li>
            <li>{subTheme}</li>
          </ul>
          <h3>{icon}</h3>
          <span>{period}</span>
          <h3>{skill}</h3>
          <p>{design}</p>
          <p>{publishing}</p>
        </div>
        <img src={`../images/${image}`} alt={name}/>
      </section>
    </>
  );
}

export default ProjectDetail;

/*

마스킹 테이프
스티커(크레용으로 그린 느낌)
타이틀별 컬러 전환(랜덤?!)

퍼블리싱 보완
json 파일에 개요? overview 부분
array로 정리해두기!

*/