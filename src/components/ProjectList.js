import { Link } from "react-router-dom";

/* css import */
import style from "../styles/Home.module.scss";

function Project({ id, category, name, image, description, demo, test }) {
  return (
    <li key="project.id">
      <div className={style.tumb}>
        <img src={image} alt={name} />
      </div>
      <h2><Link to={`/project/${id}`}>{name}</Link></h2>
      <Link to={demo}>{demo}</Link>
      <ul>
        {test.map((g) => ( 
          <li key={g} className="box yellow">
            {g}
          </li>
        ))}
      </ul>
      <span>{category}</span>
      <p>
        {description.length > 200
          ? `${description.slice(0, 200)}`
          : description}
      </p>
    </li>
  );
}

export default Project;