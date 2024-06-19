import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h1>
          LIM + SUN 임선 포트폴리오
          <img src="../images/logo.gif" alt="임선 포트폴리오 로고" />
        </h1>
      </Link>
    </header>
  );
};
export default Header;
