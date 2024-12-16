import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import LocomotiveScroll from "locomotive-scroll";

const Main = () => {
  new LocomotiveScroll({
    smooth: true,
  });

  return (
    <div className="relative bg-white">
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
