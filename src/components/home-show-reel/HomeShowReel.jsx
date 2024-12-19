import { UpdateFollower } from "react-mouse-follower";
import { AppContext } from "../../context/context";
import { useContext, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const HomeShowReel = () => {
  const { setIsOpen } = useContext(AppContext);
  const parentContainer = useRef(null);
  const videoElement = useRef(null);
  const textPlay = useRef(null);
  const textReel = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentContainer.current,
        start: "top top",
        scrub: 2,
        pin: true,
        // pinSpacing: true,
        // markers: true,
      },
    });

    mm.add("(min-width: 768px)", () => {
      // Animations for desktop and larger devices
      tl.to(videoElement.current, { width: "100%", height: "100%" }, "a");
      tl.to(textPlay.current, { x: 400 }, "a");
      tl.to(textReel.current, { x: -400 }, "a");
    });
    mm.add("(max-width: 767px)", () => {
      // Animations for mobile and smaller device

      tl.to(videoElement.current, { width: "100%", height: "40%" }, "a");
      tl.to(textPlay.current, { x: 70 }, "a");
      tl.to(textReel.current, { x: -70 }, "a");
    });

    return () => {
      mm.revert();
      // ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={parentContainer}
      className="w-full h-screen place-content-center bg-black text-white"
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
                <p className="text-[2px] text-white font-Lausanne font-medium">
                  Play
                </p>
              </div>
            </div>
          ),
        }}
      >
        <div
          onClick={() => setIsOpen(true)}
          className="min-h-screen mx-auto relative"
        >
          {/* Reel text */}
          <div className="w-1/2 mx-auto h-full flex flex-col gap-10">
            <h1 className="text-center flex items-center justify-center gap-1 font-Lausanne text-base absolute left-1/2 -translate-x-1/2 top-10">
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
              <div>Work in motion</div>
            </h1>
            <h1 className="w-1/2 h-60 mx-auto flex items-center justify-center z-10 absolute top-1/2  -translate-y-1/2 ">
              <div
                ref={textPlay}
                className="font-Lausanne capitalize text-[13vw] sm:text-[10vw] absolute -left-[40%] font-normal"
              >
                play
              </div>
              <div
                ref={textReel}
                className="font-Lausanne capitalize text-[13vw] sm:text-[10vw] absolute -right-[40%] font-normal"
              >
                Reel
              </div>
            </h1>
            <p className="font-Lausanne text-balance font-light absolute bottom-20 sm:bottom-44 left-1/2 -translate-x-1/2 w-full sm:w-2/6 text-center">
              <span>
                Our work is best experienced in motion. Don’t forget to put on
                your headphones.
              </span>
            </p>
          </div>
          <video
            ref={videoElement}
            autoPlay
            muted
            loop
            className="w-[50vw] sm:w-[400px] h-24 sm:h-48 object-cover absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-30"
            src="https://res.cloudinary.com/dwvt17wew/video/upload/v1733895164/9e976370_uprsxj.mp4"
          ></video>
        </div>
      </UpdateFollower>
    </div>
  );
};

export default HomeShowReel;
