import { Link } from "react-router-dom";

/* css import */
import style from "../styles/Home.module.scss";

/* icon import */
import { ArrowRight, PersonBoundingBox, BriefcaseFill} from 'react-bootstrap-icons';
import * as Icons from 'react-bootstrap-icons';

/* component import */
import BtnCircle from "../components/BtnCircle";

function Project({
  key,
  id,
  category,
  name,
  image,
  description,
  demo,
  test,
  theme,
  icon
}) {
  const BadgeIcon = category === "개인" ? PersonBoundingBox : BriefcaseFill;
  const IconComponent = Icons[icon];

  return (
    <li key="project.id">
      <Link
        to={demo}
        className={style.tumb}
        style={{ backgroundColor: `${theme}` }}
      >
        {IconComponent && <IconComponent />}
      </Link>
      <h2>{name}</h2>
      <p>
        {description.length > 100
          ? `${description.slice(0, 100)}`
          : description}
      </p>
      <ul className="builtwith_wrap">
        {test.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <div className={style.btn_wrap}>
        <div className={style.category}>
          <BtnCircle/>
          <BadgeIcon/>
        </div>
        <Link to={`detail/${id}`} className="btn_site">
          <ArrowRight className="icon"/>
        </Link>
      </div>
    </li>
    
  );
}

export default Project;
