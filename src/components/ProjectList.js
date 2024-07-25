import { Link } from "react-router-dom";

/* icon import */
import {
  ThreeDots,
  HeartPulseFill,
  BriefcaseFill,
  HouseDoorFill,
} from "react-bootstrap-icons";
import * as Icons from "react-bootstrap-icons";

/* component import */
import BtnCircle from "../components/BtnCircle";
import CardSlide from "../components/CardSlide";
import { useEffect } from "react";

function Project({
  category,
  period,
  client,
  name,
  nameAbbr,
  description,
  demo,
  color,
  subColor,
  icon
}) {
  const BadgeIcon = category === "개인" ? HeartPulseFill : BriefcaseFill;
  const IconComponent = Icons[icon];

  useEffect(() => {
    CardSlide();
  });

  return (
    <li style={{ backgroundColor: `${color}`, borderColor: `${color}` }}>
      <span>{client}</span>
      <div className="tumb">
        {IconComponent && <IconComponent style={{ color: `${subColor}` }} />}
      </div>
      <div>
        <div className="title">
          <div>
            <span>{period}</span>
            <h2>{name}</h2>
          </div>
          <div className="category">
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
          {demo && (
            <Link to={demo} target="_blank" className="btn_site">
              <HouseDoorFill className="icon" />
            </Link>
          )}
          {description && description.trim() !== 'WORK IN PROGRES' && (
            <Link to={`detail/${nameAbbr}`} className="btn_site">
              <ThreeDots className="icon" />
            </Link>
          )}
        </div>
      </div>
    </li>
  );
}

export default Project;