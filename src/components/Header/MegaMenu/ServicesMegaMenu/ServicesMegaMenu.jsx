import { PiTipJarLight } from "react-icons/pi";
import "./ServicesMegaMenu.css";
import {
  LuBadgeDollarSign,
  LuFileVideo2,
  LuSwitchCamera,
} from "react-icons/lu";

const ServicesMegaMenu = () => {
  return (
    <div className="services-megamenu">
      <div className="megamenu-item">
        <a className="megamenu-link" href="#">
          <div className="icon">
            <LuBadgeDollarSign />
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
            <PiTipJarLight />
          </div>
          <div className="megamenu-text">
            <h3>Corporate Investments</h3>
            <p>Habitasse a netus nunc potenti curabitur accumsan netus.</p>
          </div>
        </a>
      </div>
      <div className="megamenu-item">
        <a className="megamenu-link" href="#">
          <div className="icon">
            <LuSwitchCamera />
          </div>
          <div className="megamenu-text">
            <h3>Stock Markets % Bonds</h3>
            <p>Tempus urna risus torquent netus dictum quisque orci vivamus.</p>
          </div>
        </a>
      </div>
      <div className="megamenu-item">
        <a className="megamenu-link" href="#">
          <div className="icon">
            <LuFileVideo2 />
          </div>
          <div className="megamenu-text">
            <h3>Corporate Management</h3>
            <p>Suscipit sed proin egestas eget suscipit ornare maximus</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ServicesMegaMenu;
