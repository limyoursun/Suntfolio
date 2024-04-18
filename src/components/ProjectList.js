import { Link } from "react-router-dom";

/* css import */
import style from "../styles/Home.module.scss";

function Project({key, id, category, name, image, description, demo, test }) {
  return (
    <li key="project.id">
      <div className={style.tumb} style={{backgroundColor:`${name}`}}>
        <img src={image} alt={name}/>
      </div>
      <span>{category}</span>
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
        <Link to={`detail/${id}`} className="btn_site">Detail</Link>
    </li>
  );
}

export default Project;
