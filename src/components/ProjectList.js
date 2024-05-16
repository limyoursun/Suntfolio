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
  key,
  id,
  client,
  category,
  name,
  image,
  description,
  demo,
  test,
  theme,
  subTheme,
  icon,
}) {
  const BadgeIcon = category === "개인" ? PersonArmsUp : BriefcaseFill;
  const IconComponent = Icons[icon];

  useEffect(() => {
    CardSlide();
  });

  return (
    <li
      key="project.id"
      style={{ backgroundColor: `${theme}`, borderColor: `${theme}` }}
    >
      <span>{client}</span>
      <div className={style.tumb}>
        {IconComponent && <IconComponent style={{ color: `${subTheme}` }} />}
      </div>
      <div>
        <div className={style.title}>
          <div>
            <div className="builtwith_wrap">
              {test.map((g) => (
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
          <Link to={`detail/${id}`} className="btn_site">
            <ThreeDots className="icon" />
          </Link>
        </div>
      </div>
    </li>
  );
}

export default Project;
