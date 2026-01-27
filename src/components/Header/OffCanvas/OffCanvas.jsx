import "./OffCanvas.css";
import logoForLight from "../../../assets/logoforlight.png";
import { BsGraphUpArrow } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";

const OffCanvas = () => {
  return (
    <div
      id="offCanvas"
      className="ofcanvas-container"
      onClick={() => {
        document.getElementById("offCanvas").classList.remove("active");
        document.querySelector(".hamburger").classList.remove("active");
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="ofcanvas"
      >
        <div className="offcanvas-btn">
          <button
            onClick={() => {
              document.getElementById("offCanvas").classList.remove("active");
              document.querySelector(".hamburger").classList.remove("active");
            }}
            className="close-btn"
          >
            <RxCross1 />
          </button>
        </div>
        <div className="logo">
          <img src={logoForLight} alt="Logo" />
        </div>
        <div className="ofcanvas-menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="ofcanvas-card">
          <div className="icon">
            <BsGraphUpArrow />
          </div>
          <div className="text">
            <h3>Let's shape the future of your investments!</h3>
            <p>
              Natoque iaculis cursus augue urna commondo aptent morbi tortor
              porttitor quis ornare.
            </p>
          </div>
          <div className="card-button">
            <a href="#">
              Start Now{" "}
              <span className="btn-icon">
                <GoArrowUpRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffCanvas;
