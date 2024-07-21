import { Route, Routes } from "react-router-dom";

/* page import */
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Layout = () => {
  return (
    <main>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </main>
  );
};
export default Layout;
