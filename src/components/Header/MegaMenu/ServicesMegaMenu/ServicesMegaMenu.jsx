import { PiArrowBendDoubleUpLeft } from "react-icons/pi";
import "./ServicesMegaMenu.css";

const ServicesMegaMenu = () => {
  return (
    <div className="megamenu-content">
      <div className="megamenu-item">
        <a className="megamenu-link" href="#">
          <div className="icon">
            <PiArrowBendDoubleUpLeft />
          </div>
          <div className="megamenu-text">
            <h3>Wealth Management</h3>
            <p>Felis magnis condimentum nullam purus conubia lobortis</p>
          </div>
        </a>
      </div>
      <div className="megamenu-item">
        <a className="megamenu-link" href="#">
          <div className="icon">
            <PiArrowBendDoubleUpLeft />
          </div>
          <div className="megamenu-text">
            <h3>Wealth Management</h3>
            <p>Felis magnis condimentum nullam purus conubia lobortis</p>
          </div>
        </a>
      </div>
      <div className="megamenu-item">
        <a className="megamenu-link" href="#">
          <div className="icon">
            <PiArrowBendDoubleUpLeft />
          </div>
          <div className="megamenu-text">
            <h3>Wealth Management</h3>
            <p>Felis magnis condimentum nullam purus conubia lobortis</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ServicesMegaMenu;
