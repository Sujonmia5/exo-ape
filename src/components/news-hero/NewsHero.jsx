import { BiRightArrowAlt } from "react-icons/bi";
import styles from "../work/project.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";

const NewsHero = () => {
  const newsContainerRef = useRef(null);
  const leftSideVideo = useRef(null);
  const leftSideImage = useRef(null);
  const rightSideVideo = useRef(null);
  const rightSideImage = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: newsContainerRef.current,
        start: "30% 75%",
        // end: "bottom 70%",
        scrub: 1,
        // markers: true,
      },
    });
    tl.to(
      leftSideVideo.current,
      {
        x: "-50%",
      },
      "a"
    );
    tl.to(
      leftSideImage.current,
      {
        x: "-40%",
      },
      "a"
    );
    tl.to(
      rightSideVideo.current,
      {
        x: "70%",
      },
      "a"
    );
    tl.to(
      rightSideImage.current,
      {
        x: "60%",
      },
      "a"
    );
  }, []);

  return (
    <div
      id="section4"
      className="min-h-screen w-full pb-10 sm:py-56 relative z-[10] bg-white"
    >
      <div
        ref={newsContainerRef}
        className="max-w-screen-2xl mx-auto h-[70vh] mb-20 sm:h-fit flex items-center justify-center overflow-hidden sm:pb-96"
      >
        <div className="w-[35.73vw]  sm:w-[25vw] h-[60.44vw] sm:h-[40vw] mx-auto relative">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dwvt17wew/image/upload/v1734013924/news1_g4ppn8.jpg"
            alt=""
          />
          <div
            ref={leftSideVideo}
            className="w-[30vw] sm:w-[25vw] h-[16.8vw] sm:h-[14vw] absolute -left-[40%] sm:-left-3/4 top-[44%] -translate-y-1/2"
          >
            <video
              autoPlay
              muted
              loop
              src="https://res.cloudinary.com/dwvt17wew/video/upload/v1734179341/home-news-diesel-be-a-follower_qsnwrn.mp4"
            ></video>
          </div>
          <div
            ref={rightSideImage}
            className="w-[19.2vw] sm:w-[15vw] h-[26.2vw] sm:h-[19vw] absolute left-[80%] top-[30%] -translate-y-1/2"
          >
            <img
              src="https://res.cloudinary.com/dwvt17wew/image/upload/v1734013924/news2_uw5p1b.jpg"
              alt=""
            />
          </div>
          <div
            ref={leftSideImage}
            className="w-[35.2vw] sm:w-[26vw] h-[24.2vw] sm:h-[17.63vw] absolute -left-20 sm:-left-[80%] top-full sm:-bottom-72 "
          >
            <img
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dwvt17wew/image/upload/v1734013924/news3_qwqpoq.jpg"
              alt=""
            />
          </div>
          <div
            ref={rightSideVideo}
            className="w-[25.2vw] sm:w-[25.8vw] h-[24.5vw] sm:h-[26vw] absolute -right-16 sm:-right-[70%] top-full sm:-bottom-72 "
          >
            <video
              autoPlay
              muted
              loop
              className="w-full h-full"
              src="https://res.cloudinary.com/dwvt17wew/video/upload/v1734179342/news-rino-pelle_grz9km.mp4"
            ></video>
          </div>
        </div>
      </div>

      {/* bottom section */}
      <div
        data-scroll
        data-scroll-speed="-0.2"
        className="-mt-10 sm:mt-10 text-inherit "
      >
        <div className="flex flex-col justify-center items-center pb-32 pt-16 sm:pt-0 sm:pb-0">
          <h1 className="text-center flex items-center justify-center gap-1 font-Lausanne capitalize font-normal text-base">
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
            <div>in the media</div>
          </h1>
          <div>
            <h2 className="text-start sm:text-center sm:text-[10vw] font-Lausanne font-normal text-[12.8vw] leading-[0.9] sm:mb-10">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                Spread
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                the News
              </motion.div>
            </h2>
          </div>

          <p className="text-center sm:text-[1.6vw] w-60 sm:w-[500px] mx-auto capitalize font-Lausanne font-light leading-normal my-10 overflow-hidden">
            <motion.span
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Find out more about our work on these leading design and
              technology platforms.
            </motion.span>
          </p>
          <div className="flex items-center justify-center w-screen">
            <a className={`${styles.hero_link}  pointer-events-auto `} href="#">
              <div className="flex items-center gap-1 -ml-4 hover:ml-0 transition-all">
                <div className={`${styles.link_arrow}  size-9 relative`}>
                  <div className={`${styles.circle}`}></div>
                  <BiRightArrowAlt
                    className={`${styles.icon} size-5 text-white`}
                  />
                </div>
                <div
                  className={`${styles.link_text} text-base w-fit font-Lausanne font-light tracking-wide relative overflow-hidden text-black`}
                >
                  Browse all news
                  <div
                    className={`${styles.link_line}  h-[1px] w-full absolute left-0 bottom-0 bg-black/50`}
                  ></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHero;
