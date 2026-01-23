import "./Header.css";
import logo from "../../assets/logo.png";
import MegaMenu from "./MegaMenu/MegaMenu";
import { useRef } from "react";

export default function Header() {
  const megaMenuRef = useRef(null);

  const showMegaMenu = () => {
    if (megaMenuRef.current) {
      megaMenuRef.current.displayMegaMenu();
    }
  };

  const hideMegaMenu = () => {
    if (megaMenuRef.current) {
      megaMenuRef.current.removeMegaMenu();
    }
  };

  return (
    <header id="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="InvestBooster" />
        </div>
        <div className="navbar">
          <nav>
            <ul>
              <li>
                <a className="menu-item" href="#">
                  Home
                </a>
              </li>
              <li>
                <a
                  className="menu-item"
                  onMouseOver={showMegaMenu}
                  onMouseLeave={hideMegaMenu}
                  href="#"
                >
                  Services
                </a>
                <MegaMenu ref={megaMenuRef} />
              </li>
              <li>
                <a className="menu-item" href="#">
                  News
                </a>
              </li>
              <li>
                <a className="menu-item" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="menu-item" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button className="hamburger">
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
