import { forwardRef, useImperativeHandle, useRef } from "react";
import "./MegaMenu.css";

const MegaMenu = forwardRef((props, ref) => {
  const menuRef = useRef(null);

  useImperativeHandle(ref, () => ({
    displayMegaMenu: () => {
      if (menuRef.current) {
        menuRef.current.classList.add("active");
      }
    },
    removeMegaMenu: () => {
      if (menuRef.current) {
        menuRef.current.classList.remove("active");
      }
    },
  }));

  return (
    <div ref={menuRef} className="mega-menu">
      MegaMenu
    </div>
  );
});

export default MegaMenu;
