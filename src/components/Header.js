import { Link } from "react-router-dom";
import logo from './../assets/images/logo.gif';

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">
          LIM + SUN 임선 포트폴리오
          <img src={logo} alt="임선 포트폴리오 로고" />
        </Link>
      </h1>
    </header>
  );
};
export default Header;