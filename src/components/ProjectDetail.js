import { Link } from "react-router-dom";

/* icon import */
import { HouseDoorFill } from "react-bootstrap-icons";
import * as Icons from "react-bootstrap-icons";

function ProjectDetail({
  key,
  category,
  period,
  client,
  name,
  description,
  nameAbbr,
  imageCount,
  descriptions,
  skill,
  keyword,
  demo,
  github,
  color,
  subColor,
  icon,
}) {
  const IconComponent = Icons[icon];
  const images = Array.from({ length: imageCount }, (_, index) => `img_${nameAbbr}_${index + 1}.png`);

  return (
    <>
      <div className="info">
        <div>
          <h3>{name}</h3>
          <Link to={demo} target="_blank" className="btn_site">
            <HouseDoorFill className="icon" />
          </Link>
        </div>
        <ul>
          <li>{period}</li>
          <li>
            <ul className="list_wrap">
              {keyword.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </li>
        </ul>
        <div className="list_wrap">
          {descriptions.map((i) => (
            <p key={i}>{i}</p>
          ))}
        </div>
      </div>
      <ul className="grid">
        {images.map((j) => (
            <li key={j}>
              <img src={`../images/detail/${j}`} alt={`${name} 상세 이미지`} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default ProjectDetail;
