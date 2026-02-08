import "./Button.css";
import { GoArrowUpRight } from "react-icons/go";

const Button = () => {
  return (
    <div className="btn">
      <a href="#">
        Get Started{" "}
        <span className="btn-icon">
          <GoArrowUpRight />
        </span>
      </a>
    </div>
  );
};

export default Button;
