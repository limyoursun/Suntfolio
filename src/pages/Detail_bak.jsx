import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";

/* icon import */
import { PiCodeFill, PiPencilCircleFill } from "react-icons/pi";
import { BiSolidBookmarkHeart } from "react-icons/bi";

/* css import */
import style from "../styles/Detail.module.scss";

/* component import */
import BtnBack from "../components/BtnBack";
import ProjectDetail from "../components/ProjectDetail";

const Detail = () => {
  const params = useParams();
  console.log(params);

  // let nameList = names.filter(v => v.age < 30);
  // nameList = nameList.map(v => (<Main name={v.userName} age={v.age}/>));


  return (
    <>
      <section>
        <BtnBack className="icon"/>
        <aside className={`${style.detail_side}`}>
          <div className={style.tumb}>
            <img src="" alt="임시 이미지" />
          </div>
          <span>기상청</span>
          <em>2024.05 - 2024.8</em>
          <h2>사용자 맞춤형 지진정보서비스</h2>
          <ul className="builtwith_wrap">
            <li>HTML</li>
            <li>SCSS</li>
            <li>React</li>
          </ul>
          <p>
            헌법재판소는 법률에 저촉되지 아니하는 범위안에서 심판에 관한 절차,
            내부규율과 사무처리에 관한 규칙을 제정할 수 있다.
            민주평화통일자문회의의 조직·직무범위 기타 필요한 사항은 법률로
            정한다.
          </p>
          <button type="button" className="btn_site">
            site visit
          </button>
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
};

export default Detail;
