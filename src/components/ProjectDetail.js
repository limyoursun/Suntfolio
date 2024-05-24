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
  publishing,
}) {
  const IconComponent = Icons[icon];

  return (
    <>
      <section className={style.detail_con}>
        <div>
          <h4 className={style.title}>{category}</h4>
          <span>{period}</span>
          <h3>{name}</h3>
          <div className={style.description_wrap}>
            <div className={style.description}>
              <div className={style.img_wrap}>
                <img src={`../images/${image}`} alt={name} />
              </div>
              <div>
                <span>{category}</span>
                <span>{period}</span>
                <span>{category}</span>
              </div>
            </div>
            <div className={style.description}>
              <p className={style.paragraph}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </p>
              <div className={style.img_wrap}>
                <img src={`../images/${image}`} alt={name} />
              </div>
            </div>
            <div className={style.description}>
              <div className={style.img_wrap}>
                <img src={`../images/${image}`} alt={name} />
              </div>
              <p className={style.paragraph}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </p>
            </div>
            <div className="parchment"></div>
            <div className="parchment"></div>
          </div>
        </div>
        <div className={style.con_info}>
          <span>{client}</span>
          <span>{category}</span>
          <p>{description}</p>
          <Link to={demo}>demo</Link>
          <h3>{icon}</h3>
          <h3>{skill}</h3>
          <p>{design}</p>
          <p>{publishing}</p>
        </div>
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
