import { useScroll } from "motion/react";
import { createContext, useRef, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const Context = ({ children }) => {
  const heading_Text1 = useRef(null);
  const heading_Text2 = useRef(null);
  const heading_Text3 = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const [scrollingValue, setScrollingValue] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (latest) => {
    const newNumber = Math.floor(latest * 100);
    if (newNumber >= 1) {
      setIsScrolling(true);
    } else {
      setScrollingValue(newNumber);
      setIsScrolling(false);
    }
  });

  const value = {
    scrollYProgress,
    isScrolling,
    scrollingValue,
    heading_Text1,
    heading_Text2,
    heading_Text3,
    isOpen,
    setIsOpen,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default Context;
