export const boxClassName = (value) => {
  switch (value) {
    case 0:
      return "w-full h-auto sm:h-fit sm:mb-40 col-span-12 sm:col-span-7 col-start-1 sm:col-start-2 col-end-13 sm:col-end-8 relative";
    case 1:
      return "mt-10 sm:mt-96 w-full h-auto sm:h-[35vw] col-span-12 sm:col-start-9 sm:col-end-13";
    case 2:
      return "w-full h-auto sm:h-[26vw] sm:row-start-2 sm:col-start-2 sm:col-end-5 col-span-12 mt-10 sm:mt-[550px] ";
    case 3:
      return "w-full h-auto sm:h-[600px] sm:h-fit mt-10 sm:mt-40 sm:col-start-6  sm:col-end-11 col-span-12";
    case 4:
      return "w-full h-auto sm:row-start-3 sm:col-start-11  sm:col-end-13 col-span-12 sm:col-start-9 sm:col-end-11 mt-10";
    default:
      return;
  }
};

// work project div with css class
{
  /* <div className="w-full min-h-[95vh]  col-span-12 sm:col-span-7 sm:col-start-2 sm:col-end-8 relative"></div>
          <div className="mt-10 sm:mt-96 w-full h-[550px] col-span-12 sm:col-start-9 sm:col-end-13"></div>
          <div className="w-full h-[500px] sm:row-start-2 sm:col-start-2 sm:col-end-5 col-span-12 mt-10 sm:mt-[550px] "></div>
          <div className="w-full h-[700px] mt-10 sm:mt-44 sm:col-start-6  sm:col-end-11 col-span-12"></div>
          <div className="w-full h-[100px] sm:row-start-3 sm:col-start-11  sm:col-end-13 col-start-5 col-end-9 mt-10"></div> */
}

// {workData.map((item, i) => {
//   return i !== 4 ? (
//     <a href="#" key={i} className={`${className(i)} relative `}>
//       <div className="w-full h-full">
//         {/* <img
//           src={item?.imageUrl}
//           alt="project images"
//           className="opacity-1 w-full h-fit absolute top-0 left-0 z-[2]"
//         /> */}
//         <video
//           autoPlay
//           muted
//           loop
//           className="absolute top-0 left-0 w-fit h-fit"
//           src={item?.videoUrl}
//         ></video>
//       </div>
//       <p className="text-base sm:text-[1vw] font-Lausanne font-normal leading-tight w-full h-fit my-2">
//         <span>
//           <strong className="relative after:content-['-'] after:mx-1 after:text-black">
//             {item?.title?.split("-")[0]}
//           </strong>
//           {item?.title?.split("-")[1]}
//         </span>
//       </p>
//     </a>
//   ) : (
//     <div className={`${className(i)}`}>
//       <a
//         className={`${styles.hero_link}  pointer-events-auto`}
//         href="#"
//       >
//         <div className="flex items-center gap-1 -ml-4 hover:ml-0 transition-all">
//           <div className={`${styles.link_arrow}  size-9 relative`}>
//             <div className={`${styles.circle}`}></div>
//             <BiRightArrowAlt
//               className={`${styles.icon} size-5 text-white`}
//             />
//           </div>
//           <div
//             className={`${styles.link_text} text-base w-fit font-Lausanne font-light tracking-wide relative overflow-hidden`}
//           >
//             Browse all work
//             <div
//               className={`${styles.link_line}  h-[1px] w-full absolute left-0 bottom-0 bg-black/50`}
//             ></div>
//           </div>
//         </div>
//       </a>
//     </div>
//   );
// })}
