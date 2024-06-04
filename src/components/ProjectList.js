import { Link } from "react-router-dom";

/* css import */
import style from "../styles/Home.module.scss";

/* icon import */
import {
  ThreeDots,
  PersonArmsUp,
  BriefcaseFill,
  HouseDoorFill,
} from "react-bootstrap-icons";
import * as Icons from "react-bootstrap-icons";

/* component import */
import BtnCircle from "../components/BtnCircle";
import CardSlide from "../components/CardSlide";
import { useEffect } from "react";

function Project({
  id,
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
  icon
}) {
  const BadgeIcon = category === "개인" ? PersonArmsUp : BriefcaseFill;
  const IconComponent = Icons[icon];

  useEffect(() => {
    CardSlide();
  });

  return (
    <li
      key="project.id"
      style={{ backgroundColor: `${color}`, borderColor: `${color}` }}
    >
      <span>{client}</span>
      <div className={style.tumb}>
        {IconComponent && <IconComponent style={{ color: `${subColor}` }} />}
      </div>
      <div>
        <div className={style.title}>
          <div>
            <div className="builtwith_wrap">
              {skill.map((g) => (
                <span key={g}>{g}</span>
              ))}
            </div>
            <h2>{name}</h2>
          </div>
          <div className={style.category}>
            <BtnCircle />
            <BadgeIcon />
          </div>
        </div>
        <p>
          {description.length > 100
            ? `${description.slice(0, 100)}··`
            : description}
        </p>
        <div>
          <Link to={demo} target="_blank" className="btn_site">
            <HouseDoorFill className="icon" />
          </Link>
          <Link to={`detail/${id}`} target="_blank" className="btn_site">
            <ThreeDots className="icon" />
          </Link>
        </div>
      </div>
    </li>
  );
}

export default Project;