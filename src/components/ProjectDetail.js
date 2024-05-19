import { Link } from "react-router-dom";

/* css import */
import style from "../styles/Detail.module.scss";

/* icon import */
import { HouseDoorFill } from "react-bootstrap-icons";
import * as Icons from "react-bootstrap-icons";

function ProjectDetail({
  period,
  name,
  description,
  skill,
  demo,
  image,
  theme,
  design,
  publishing,
  icon,
  test,
}) {
  const IconComponent = Icons[icon];

  return (
    <>
      <section className={style.detail_con}>
        <article>
          <div className={style.con_info}>
            <div>
              <h3>project<br/>title</h3>
              <p>{name}</p>
            </div>
            <div>
              <h3>project<br/>overview</h3>
              <ul className={style.test_1}>
                {skill.map((g) => (
                  <li key={g}>{g}</li>
                ))}
                <li>어쩌고 저쩌고 이미지</li>
                <li>어쩌고 저쩌고 이미지 어쩌고 저쩌고 이미지</li>
                <li>어쩌고 저쩌고 저쩌고 저쩌고 이미지</li>
              </ul>
            </div>
            <div>
              <h3>project<br/>period</h3>
              <p>{period}</p>
            </div>
            <div>
              <h3>project<br/>description</h3>
              <p>{description}</p>
            </div>
            <div>
              <p>
                이곳은 프로젝트에 대한 자세한 설명과 함께, 제가 맡은 역할과
                작업한 범위를 구체적으로 기재합니다.
                <br/>
                프로젝트에서 사용한 기술과 도구에 대해서도 간략하게
                소개해드립니다.
                <br/>
                프로젝트를 작업하며 신경 쓴 주요 기능과 화면을 직접 확인하실 수
                있어요!
              </p>
            </div>
            <div>
              <h2>{name}</h2>
              <ul className="builtwith_wrap">
                {skill.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <em>{period}</em>
              <p>{description}</p>
            </div>
            <Link to={demo} className="btn_site">
              <HouseDoorFill className="icon"/>
            </Link>
          </div>
          <ul>
            <li>
              <div
                className={style.tumb}
                style={{ backgroundColor: `${theme}` }}
              >
                <img src={`../images/${image}`} alt={name}/>
              </div>
            </li>
            <li>
              <p>{publishing}</p>
            </li>
            <li>
              <p>{design}</p>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}

export default ProjectDetail;

/*

디자인 보완
클립
마스킹 테이프
스티커(크레용으로 그린 느낌)
타이틀별 컬러 전환(랜덤?!)

퍼블리싱 보완
json 파일에 개요? overview 부분
array로 정리해두기!

*/