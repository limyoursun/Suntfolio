/* css import */
import style from "../styles/Layout.module.scss";
import { Route, Routes } from "react-router-dom";

/* page import */
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
};
export default Layout;
