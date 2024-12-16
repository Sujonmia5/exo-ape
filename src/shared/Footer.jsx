import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#070707] text-[#e0ccbb] relative w-full min-h-fit">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-16 pt-10 pb-0 sm:pt-10 space-y-10 relative z-20 overflow-hidden">
        <h1 className="text-[11vw] font-normal leading-none tracking-normal mt-16">
          <div>Our</div>
          <div>Story</div>
        </h1>
        <h3 className="font-Lausanne text-[2vw] font-normal w-[37%]">
          The story behind Exo Ape is one of exploration, creativity and
          curiosity.
        </h3>
        <hr />
        <div className="grid grid-cols-12 grid-flow-row-dense gap-[2vw] pb-1">
          <ul className="col-start-1 col-end-13 sm:col-end-4 capitalize text-lg font-Lausanne font-normal space-y-3">
            <li>
              <a href="" className="">
                Willem II Singel 8
                <br />
                6041 HS, Roermond
                <br />
                The Netherlands
              </a>
            </li>
            <li>
              <a href="">hello@exoape.com</a>
            </li>
          </ul>
          <ul className="row-start-2 sm:row-start-1 col-start-1 sm:col-start-4 col-end-5 sm:col-end-6 capitalize text-lg font-Lausanne font-normal space-y-3">
            <li>
              <NavLink to="/about">
                <div>work</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <div>studio</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <div>News</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <div>contact</div>
              </NavLink>
            </li>
          </ul>
          <ul className="col-start-6 col-end-8 capitalize text-lg font-Lausanne font-normal space-y-3">
            <li>
              <a href="">Behance</a>
            </li>
            <li>
              <a href="">Dribbble</a>
            </li>
            <li>
              <a href="">Twitter</a>{" "}
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
          </ul>
          <ul className="row-start-3 sm:row-start-1 col-start-1  col-end-4 sm:col-end-13 sm:col-start-12 capitalize text-lg font-Lausanne font-normal w-full">
            <li>Our story</li>
          </ul>
        </div>
      </div>
      <div className=" absolute top-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="w-10/12 sm:max-w-screen-lg z-10 absolute top-36 sm:top-52 -right-10"
          src="https://res.cloudinary.com/dwvt17wew/video/upload/v1734019831/video-6_n75ksn.mp4"
        ></video>
      </div>
    </footer>
  );
};

export default Footer;
