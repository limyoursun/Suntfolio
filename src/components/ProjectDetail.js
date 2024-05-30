import { Link } from "react-router-dom";

/* css import */
import style from "../styles/Detail.module.scss";

/* icon import */
import { HouseDoorFill } from "react-bootstrap-icons";
import * as Icons from "react-bootstrap-icons";

function ProjectDetail({
  category,
  period,
  client,
  name,
  image,
  image1,
  image2,
  image3,
  description1,
  description2,
  description3,
  skill,
  demo,
  color,
  subColor,
  icon,
}) {
  const IconComponent = Icons[icon];

  return (
    <>
      <section className={style.detail_con}>
        <h3 className="img_ribbon">
          DESIGN
          <br />
          OVERVIEW<span className="img_bubble">Point Check</span>
        </h3>
        
        <div className={style.view_wrap}>
          
        <div className={style.main_view_wrap}>
            <div className={style.img_wrap}>
              <img src={`../images/${image2}`} alt={name} />
            </div>
            <p>{description2}</p>
          </div>
          
          <div className={style.part_view_wrap}>
            <p style={{ boxShadow: `0px 6px 0 0px ${subColor}` }} className="img_butterfly_lilac">{description3}</p>
            <img style={{ boxShadow: `0px 6px 0 0px ${color}`, borderColor:`${color}` }} src={`../images/${image3}`} alt={name} />
          </div>
          <div className={style.img_wrap}>
            <img src={`../images/${image}`} alt={name} />
          </div>
          <div className={style.part_view_wrap}>
            <img style={{ boxShadow: `0px 6px 0 0px ${color}`, borderColor:`${color}` }} src={`../images/${image1}`} alt={name} />
            <p style={{ boxShadow: `0px 6px 0 0px ${subColor}` }} className="img_waves">{description1}</p>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default ProjectDetail;

/*

마스킹 테이프
스티커(크레용으로 그린 느낌)
타이틀별 컬러 전환(랜덤?!)

퍼블리싱 보완
json 파일에 개요? overview 부분
array로 정리해두기!

*/
