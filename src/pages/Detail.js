import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* css import */
import style from "../styles/Detail.module.scss";

const Detail = ({ projects }) => {
  const { id } = useParams();
  console.log("Index:", id);

  // projects 배열이 초기에 undefined일 경우를 처리
  if (!projects || projects.length === 0) {
    return <div>Loading...</div>;
  }

  // filter 함수를 사용하여 선택된 id와 일치하는 프로젝트를 찾음
  const selectedProject = projects.filter(project => project.id === id)[0];

  console.log(selectedProject);

  return (
    <div>
      
    </div>
  );
}

export default Detail;
