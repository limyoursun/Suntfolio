import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link className="mail"  to='#' onClick={() => { window.open(mailto) }}
            alt={label}>
          메일 보내기{label}
        </Link>
    );
};

export default ButtonMailto;