import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import LocomotiveScroll from "locomotive-scroll";
import { useContext } from "react";
import { AppContext } from "../context/context";
import ReelModal from "../components/modal/ReelModal";

const Main = () => {
  new LocomotiveScroll({
    smooth: true,
  });
  const { isOpen } = useContext(AppContext);

  return (
    <div className="relative bg-white">
      {isOpen && <ReelModal />}
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
