import { BiRightArrowAlt } from "react-icons/bi";
import styles from "./Hero.module.css";
import { motion } from "motion/react";
import { UpdateFollower } from "react-mouse-follower";

const HeroSection = () => {
  return (
    <UpdateFollower
      className="sample"
      mouseOptions={{
        zIndex: 999,
        backgroundColor: "#00000040",
        scale: 8,

        backgroundElement: (
          <div style={{ width: "100%" }}>
            <div className="w-full h-full rounded-full flex items-center justify-center">
              <p className="text-[2px] text-white font-Lausanne font-medium">
                Scroll
              </p>
            </div>
          </div>
        ),
      }}
    >
      <div
        id="hero-section"
        className="w-full relative h-[108vh] sm:h-full text-white"
      >
        {/* Background Image */}
        <div className="sticky top-0 h-full bottom-0 left-0 right-0 overflow-hidden pointer-events-auto">
          <img
            data-scroll
            data-scroll-speed="-1"
            src="https://res.cloudinary.com/dwvt17wew/image/upload/v1733895187/filters_quality_90_qqi5t0.jpg"
            alt=""
            className="sticky top-0 w-full h-full object-cover"
          />
        </div>
        {/* Header contents */}
        <div className="absolute top-[38%] sm:top-[43%] md:top-[22%] left-[5vw] md:left-[6vw] lg:left-[7vw] xl:left-[8vw] right-[5vw] md:right-[6vw] lg:right-[7vw] xl:right-[8vw] h-full z-50 pointer-events-none">
          <div className="">
            <p className="text-[4.4vw] sm:text-[2.8vw] md:text-[1.6vw] font-Lausanne font-normal leading-normal capitalize tracking-wide overflow-hidden ">
              {[
                " Global digital design studio partnering with",
                "brands and businesses that create exceptional",
                "experiences where people live, work, and unwind.",
              ].map((item, i) => (
                <div key={i} className="inline md:block overflow-hidden ">
                  <motion.div
                    initial={{
                      rotate: 90,
                      y: "100%",
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.9,
                      delay: i * 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline md:block origin-left"
                  >
                    {item}
                  </motion.div>
                </div>
              ))}
            </p>
            <div className="mt-5 md:mt-16">
              <h1 className="sm:-ml-5 max-w-min flex flex-col items-start">
                {["Digital", "Design", "experience"].map((item, i) => (
                  <div key={i} className="overflow-hidden h-[17vw]">
                    <motion.div
                      initial={{
                        rotate: 90,
                        opacity: 1,
                        y: "100%",
                      }}
                      animate={{
                        rotate: 0,
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="origin-top-left capitalize font-Lausanne font-normal text-[18vw] leading-[13vw] tracking-tighter"
                    >
                      {item}
                    </motion.div>
                  </div>
                ))}
              </h1>
            </div>

            <div className="grid grid-cols-12 md:gap-10 mt-4 md:mt-32">
              <div className="col-span-12 md:col-span-6 row-start-1">
                <p className="text-[4.4vw] sm:text-[2.8vw] md:text-[1.7vw] font-Lausanne font-normal leading-normal capitalize tracking-wide">
                  <span>
                    We help experience-driven companies thrive by making their
                    audience feel the refined intricacies of their brand and
                    product in the digital space. Unforgettable journeys start
                    with a click.
                  </span>
                </p>
              </div>
              <UpdateFollower
                className="-ml-4 sm:-m-0 row-start-2 col-span-12 md:col-span-7 w-fit h-fit"
                mouseOptions={{
                  scale: 0,
                }}
              >
                <a
                  className={`${styles.hero_link} pointer-events-auto`}
                  href="#"
                >
                  <div className="flex items-center gap-1 -ml-4 hover:ml-0 transition-all">
                    <div className={`${styles.link_arrow}  size-9 relative`}>
                      <div className={`${styles.circle}`}></div>
                      <BiRightArrowAlt className={`${styles.icon} size-5`} />
                    </div>
                    <div
                      className={`${styles.link_text} text-lg w-fit font-Lausanne font-medium tracking-wide relative overflow-hidden`}
                    >
                      The Studio
                      <div
                        className={`${styles.link_line}  h-[2px] w-full absolute left-0 bottom-0 bg-white`}
                      ></div>
                    </div>
                  </div>
                </a>
              </UpdateFollower>
              <ul className="hidden md:block space-y-2 row-start-2 col-start-9 col-span-2">
                {["work", "studio", "news", "contact"].map((item, i) => (
                  <li
                    key={i}
                    className="ml-10 text-lg font-Lausanne tracking-wide"
                  >
                    <UpdateFollower
                      className="sample"
                      mouseOptions={{
                        scale: 0,
                      }}
                    >
                      <a
                        className=" pointer-events-auto capitalize w-fit"
                        href=""
                      >
                        {item}
                      </a>
                    </UpdateFollower>
                  </li>
                ))}
              </ul>
              <ul className="hidden md:block row-start-2 col-start-11 col-span-2 space-y-2">
                {["hello@exoape.com", "+31 772 086 200"].map((item, i) => (
                  <li key={i} className="font-Lausanne font-normal text-lg">
                    <UpdateFollower
                      className="sample"
                      mouseOptions={{
                        scale: 0,
                      }}
                    >
                      <a className=" pointer-events-auto w-fit" href="">
                        {item}
                      </a>
                    </UpdateFollower>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </UpdateFollower>
  );
};

export default HeroSection;
