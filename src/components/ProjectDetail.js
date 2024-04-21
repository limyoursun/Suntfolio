import { Link } from "react-router-dom";

/* css import */
import style from "../styles/Detail.module.scss";

/* icon import */
import { PiCodeFill, PiPencilCircleFill } from "react-icons/pi";
import { BiSolidBookmarkHeart } from "react-icons/bi";

/* component import */
import BtnBack from "../components/BtnBack";

function ProjectDetail({
  id, category, period, name, description, skill, demo, image, theme}) {
  return (
    <>
      <section>
        <BtnBack className="icon" />
        <aside className={`${style.detail_side}`}>
          <div className={style.tumb} style={{ backgroundColor: `${theme}` }}>
            <img src={image} alt={name}/>
          </div>
          <span>{category}</span>
          <em>{period}</em>
          <h2>{name}</h2>
          <ul className="builtwith_wrap">
            {skill.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <p>{description}</p>
          <Link to={demo} className="btn_site">VIEW</Link>
        </aside>
      </section>
      <section className={style.detail_con}>
        <ul>
          <li>
            주요 기능
            <BiSolidBookmarkHeart className="icon" />
          </li>
          <li>
            디자인 관련
            <PiPencilCircleFill className="icon" />
          </li>
          <li>
            코딩 관련
            <PiCodeFill className="icon" />
          </li>
          <li>
            코딩 관련
            <PiCodeFill className="icon" />
          </li>
        </ul>
        <div></div>
      </section>
    </>
  );
}

export default ProjectDetail;
