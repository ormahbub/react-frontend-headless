import { GoArrowUpRight } from "react-icons/go";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="left-content">
          <div className="heading">
            <h1>Shape The Future Through Strategic Investments!</h1>
          </div>
          <div className="text">
            <p>
              Where innovative and high-potential business opportunities await
              discovery, we are your partners.
            </p>
          </div>
          <div className="btn">
            <a href="#">
              Get Started{" "}
              <span className="btn-icon">
                <GoArrowUpRight />
              </span>
            </a>
          </div>
        </div>
        <div className="right-content">
          <div className="small-cards">
            <div className="card card-1"></div>
            <div className="card card-2"></div>
          </div>
          <div className="large-cards">
            <div className="card card-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
