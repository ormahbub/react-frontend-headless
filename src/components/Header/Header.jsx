import "./Header.css";
import logo from "../../assets/logo.png";

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
