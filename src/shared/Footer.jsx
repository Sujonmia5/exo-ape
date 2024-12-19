import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="section5"
      data-scroll
      data-scroll-speed="-0.5"
      className="bg-[#070707] text-[#e0ccbb] relative w-full min-h-screen z-[1] pb-10"
    >
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-16 pt-10 pb-0 sm:pt-10 space-y-10 relative z-20 overflow-hidden">
        <h1 className="text-[11vw] font-medium leading-none tracking-normal mt-16">
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
              <a
                href=""
                className="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:-bottom-1 after:transition-transform after:origin-right after:ease-in-out after:duration-1000 after:scale-x-0 hover:after:origin-left hover:after:scale-x-100"
              >
                hello@exoape.com
              </a>
            </li>
          </ul>
          <ul className="row-start-2 sm:row-start-1 col-start-1 sm:col-start-4 col-end-5 sm:col-end-6 capitalize text-lg font-Lausanne font-normal space-y-1">
            {["work", "studio", "news", "contact"].map((item, i) => (
              <li key={i}>
                <NavLink to="/about">
                  <div className="inline-block relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:-bottom-1 after:transition-transform after:origin-right after:ease-in-out after:duration-500 after:scale-x-0 hover:after:origin-left hover:after:scale-x-100">
                    {item}
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="col-start-6 col-end-8 capitalize text-lg font-Lausanne font-normal space-y-1">
            {["Behance", "Dribbble", "Twitter", "Instagram"].map((item, i) => (
              <li key={i}>
                <NavLink to="#">
                  <div className="inline-block relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:-bottom-1 after:transition-transform after:origin-right after:ease-in-out after:duration-500 after:scale-x-0 hover:after:origin-left hover:after:scale-x-100">
                    {item}
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="row-start-3 sm:row-start-1 col-start-1  col-end-4 sm:col-end-13 sm:col-start-12 capitalize text-lg font-Lausanne font-normal w-full">
            <li>
              <a
                href=""
                className="inline-block relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:-bottom-1 after:transition-transform after:origin-right after:ease-in-out after:duration-500 after:scale-x-0 hover:after:origin-left hover:after:scale-x-100"
              >
                Our story
              </a>
            </li>
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
