import { BiRightArrowAlt } from "react-icons/bi";
import { boxClassName } from "../../utils/function";
import styles from "./project.module.css";
import { UpdateFollower } from "react-mouse-follower";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import LocomotiveScroll from "locomotive-scroll";

const Project = () => {
  const [isMouseEnter, setIsMouseEnter] = useState({
    isTrue: false,
    index: null,
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Update screen size on resize
    const updateDeviceType = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", updateDeviceType);

    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    return () => locomotiveScroll.destroy();
  }, []);

  const workData = [
    {
      imageUrl:
        "https://res.cloudinary.com/dwvt17wew/image/upload/v1733895178/1_lkqctq.jpg",
      videoUrl:
        "https://res.cloudinary.com/dwvt17wew/video/upload/v1733894544/1_mzlpel.mp4",
      title: "Amaterasu-Frontier Health Innovation",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dwvt17wew/image/upload/v1733895180/2_e52sdc.jpg",
      videoUrl:
        "https://res.cloudinary.com/dwvt17wew/video/upload/v1733895162/2_krq8fl.mp4",
      title: "Columbia-Pictures Celebrating a Century of Cinema",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dwvt17wew/image/upload/v1733895184/4_ihwl3d.jpg",
      videoUrl:
        "https://res.cloudinary.com/dwvt17wew/video/upload/v1733895164/4_bpqoru.mp4",
      title: "Studio D-Urban and Landscape Design",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dwvt17wew/image/upload/v1733895182/3_cchnor.jpg",
      videoUrl:
        "https://res.cloudinary.com/dwvt17wew/video/upload/v1733895163/3_pr756x.mp4",
      title: "Cambium-Pioneering Sustainable Solutions",
    },
    {
      url: "/work",
      title: "Browse all work",
    },
  ];

  return (
    <div
      id="section2"
      className="text-black bg-white max-w-screen-xl mx-auto px-5 sm:px-0 py-20 sm:py-36"
    >
      {/* project text*/}
      <div className="">
        <div className="flex sm:flex-col flex-col-reverse">
          <div className="w-1/2 mb-6 sm:mb-0 ml-0 sm:ml-20">
            <h2 className="text-start sm:text-center sm:text-[16vw]  font-Lausanne font-normal text-[17.8vw] leading-[0.9] sm:mb-28 overflow-hidden">
              <motion.div
                initial={{
                  rotate: 90,
                  y: "100%",
                  opacity: 0,
                }}
                whileInView={{
                  rotate: 0,
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
              >
                {" "}
                Work
              </motion.div>
            </h2>
          </div>

          <h2 className="flex items-center gap-2 text-end sm:ml-[56vw] mb-6">
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              data-v-669b4a84=""
            >
              <path
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="currentColor"
                data-v-669b4a84=""
              ></path>
            </svg>
            <div className="text-[4vw] sm:text-[1vw] capitalize font-Lausanne">
              featured Projects
            </div>
          </h2>
        </div>
        <div className=" w-full sm:w-[25vw] sm:ml-[56vw]">
          <p className="text-[4.5vw] sm:text-[2.8vw] md:text-[1.7vw] font-Lausanne font-normal">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
        </div>
      </div>

      {/* Project card */}
      <div className="mb-20 h-full">
        <div className="grid grid-cols-12 mt-10 md:-mt-52 sm:gap-x-[2vw]">
          {workData.map((item, i) => {
            return i !== 4 ? (
              <a
                key={i}
                data-scroll
                data-scroll-speed={isMobile ? "0" : "-.2"}
                href="#"
                className={`${boxClassName(i)} group relative`}
                onMouseEnter={() =>
                  setIsMouseEnter((prev) => ({
                    ...prev,
                    isTrue: true,
                    index: i,
                  }))
                }
                onMouseLeave={() =>
                  setIsMouseEnter((prev) => ({
                    ...prev,
                    isTrue: false,
                    index: i,
                  }))
                }
              >
                <UpdateFollower
                  className="sample"
                  mouseOptions={{
                    zIndex: 999,
                    backgroundColor: "#00000040",
                    scale: 8,

                    backgroundElement: (
                      <div style={{ width: "100%" }}>
                        <div className="w-full h-full rounded-full flex items-center justify-center">
                          <p className="text-[2px] text-white font-Lausanne font-medium capitalize">
                            view
                          </p>
                        </div>
                      </div>
                    ),
                  }}
                >
                  <div className="w-full">
                    <img
                      src={item?.imageUrl}
                      alt="project images"
                      className="opacity-1 w-full h-fit"
                    />
                    <video
                      type="video/mp4"
                      autoPlay
                      muted
                      loop
                      className={`${
                        isMouseEnter.isTrue && isMouseEnter.index === i
                          ? "opacity-1"
                          : "opacity-0"
                      } absolute top-0 left-0 w-fit h-fit`}
                      src={item?.videoUrl}
                    ></video>
                  </div>
                  <p className="text-base sm:text-[1vw] font-Lausanne font-normal leading-tight w-full h-fit my-2 overflow-hidden">
                    <span className="inline-block origin-left transition-all sm:rotate-90 sm:translate-y-1/2  sm:group-hover:rotate-0 sm:group-hover:translate-y-0">
                      <strong className="relative after:content-['-'] after:mx-1 after:text-black">
                        {item?.title?.split("-")[0]}
                      </strong>
                      {item?.title?.split("-")[1]}
                    </span>
                  </p>
                </UpdateFollower>
              </a>
            ) : (
              <div
                key={i}
                className={`${boxClassName(
                  i
                )} flex items-center justify-center`}
              >
                <a
                  className={`${styles.hero_link}  pointer-events-auto inline-block`}
                  href="#"
                >
                  <div className="flex items-center gap-1 -ml-4 hover:ml-0 transition-all">
                    <div className={`${styles.link_arrow}  size-9 relative`}>
                      <div className={`${styles.circle}`}></div>
                      <BiRightArrowAlt
                        className={`${styles.icon} size-5 text-white`}
                      />
                    </div>
                    <div
                      className={`${styles.link_text} text-base w-fit font-Lausanne font-light tracking-wide relative overflow-hidden`}
                    >
                      Browse all work
                      <div
                        className={`${styles.link_line}  h-[1px] w-full absolute left-0 bottom-0 bg-black/50`}
                      ></div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
