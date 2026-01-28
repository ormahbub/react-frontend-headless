import "./Header.css";
import logo from "../../assets/logo.png";
import MegaMenu from "./MegaMenu/MegaMenu";
import { RiArrowDownSLine } from "react-icons/ri";
import OffCanvas from "./OffCanvas/OffCanvas";

export default function Header() {
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
                <a className="menu-item" href="#">
                  Services{" "}
                  <span className="drop-down-icon">
                    <RiArrowDownSLine />
                  </span>
                </a>
                <div className="megamenu-container">
                  <MegaMenu />
                </div>
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
          <button
            onClick={() => {
              document.getElementById("offCanvas").classList.toggle("active");
              document.querySelector(".hamburger").classList.add("active");
              document.body.classList.toggle("no-scroll");
            }}
            className="hamburger"
          >
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </button>
        </div>
      </div>
      <OffCanvas />
    </header>
  );
}
