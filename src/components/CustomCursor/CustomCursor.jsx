import { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const cursorDot = useRef(null);
  const cursorOutline = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDot.current && cursorOutline.current) {
        cursorDot.current.style.opacity = 1;
        cursorOutline.current.style.opacity = 1;

        const transformStr = `translate(${posX}px, ${posY}px) translate(-50%, -50%)`;
        cursorDot.current.style.transform = transformStr;
        cursorOutline.current.style.transform = transformStr;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursorDot} className="custom-cursor"></div>
      <div ref={cursorOutline} className="cursor-outline"></div>
    </>
  );
};

export default CustomCursor;
