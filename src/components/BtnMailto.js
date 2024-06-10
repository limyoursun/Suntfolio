import React from "react";
import { Link } from "react-router-dom";

/* css import */
import style from "../styles/Footer.module.scss";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link className={style.mail}  to='#' onClick={() => { window.open(mailto) }}
            alt={label}>
          메일 보내기
        </Link>
    );
};

export default ButtonMailto;