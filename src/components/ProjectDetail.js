import { Link } from "react-router-dom";

/* css import */
import style from "../styles/Detail.module.scss";

/* icon import */
import { HouseDoorFill } from "react-bootstrap-icons";
import * as Icons from "react-bootstrap-icons";

function ProjectDetail({
  key,
  category,
  period,
  client,
  name,
  image,
  image1,
  image2,
  image3,
  description,
  description1,
  description2,
  description3,
  skill,
  keyword,
  demo,
  github,
  color,
  subColor,
  icon,
}) {
  const IconComponent = Icons[icon];

  return (
    <>
      <section className={style.detail_con}>
        <ul className={style.info}>
          <li>
            <h3>
              Project
              <br />
              information
            </h3>
            <h4>: {name}</h4>
          </li>
          <li>
            <ul>
              <li>
                <ul className={style.list_wrap}>
                  {skill.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </li>
              <li>
                <ul className={style.list_wrap}>
                  {keyword.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </li>
              <li>{period}</li>
            </ul>
          </li>
          <li>
            <p>{description}</p>
          </li>
        </ul>

        <div className={style.view_wrap}>
          <div className={style.img_wrap}>
            <img src={`../images/detail/${image}`} alt={name} />
          </div>
          <div className={style.part_view_wrap}>
            <p style={{ boxShadow: `0px 6px 0 0px ${subColor}` }} className="img_waves">{description1}</p>
            <img style={{boxShadow: `0px 6px 0 0px ${color}`, borderColor: `${color}`}} src={`../images/detail/${image1}`} alt={name}/>
          </div>
          <div className={style.main_view_wrap}>
            <div className={style.img_wrap}>
              <img src={`../images/detail/${image2}`} alt={name} />
            </div>
            <p>{description2}</p>
          </div>
          <div className={style.part_view_wrap}>
            <p style={{ boxShadow: `0px 6px 0 0px ${subColor}` }} className="img_butterfly_lilac">{description3}</p>
            <img style={{boxShadow: `0px 6px 0 0px ${color}`, borderColor: `${color}`}} src={`../images/detail/${image3}`} alt={name}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectDetail;
