import { Route, Routes } from "react-router-dom";

/* css import */
import style from "../styles/Layout.module.scss";

/* page import */
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Layout = () => {
  return (
    <main>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </main>
  );
};
export default Layout;
