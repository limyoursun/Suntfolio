import { Link } from "react-router-dom";

/* css import */
import style from "../styles/Detail.module.scss";

/* component import */
import BtnBack from "../components/BtnBack";

function ProjectDetail({
  key,
  id,
  category,
  name,
  image,
  description,
  demo,
  test,
}) {
  return (
    <>
      <section>
        <BtnBack className="icon" />
        <aside className={`${style.detail_side}`}>
          <div className={style.tumb}>
            <img src={image} alt={name}/>
          </div>
          <span>{category}</span>
          <em>{test}</em>
          <h2>{name}</h2>
          <ul className="builtwith_wrap">
            {test.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <p>{description}</p>
          <Link to={demo} className="btn_site">VIEW</Link>
        </aside>
      </section>
      {/* 
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
      </section> */}
    </>
  );
}

export default ProjectDetail;
