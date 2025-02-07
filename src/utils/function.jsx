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
