import { GoArrowUpRight } from "react-icons/go";
import "./Hero.css";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { IoPlay } from "react-icons/io5";
import { BsCheckLg } from "react-icons/bs";

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
            <div className="card card-1">
              <p className="text">Average investment</p>
              <h3 className="heading">$100K</h3>
              <div className="icon-info">
                <span className="icon">
                  <HiOutlineArrowTrendingUp />
                </span>
                <h3>25%</h3>
              </div>
            </div>
            <div className="card card-2"></div>
          </div>
          <div className="large-cards">
            <div className="card card-3">
              <div className="card-top">
                <p className="text">How it works</p>
                <span className="icon">
                  <IoPlay />
                </span>
              </div>
              <div className="card-bottom">
                <div className="card-btn">
                  <span className="icon">
                    <BsCheckLg />
                  </span>
                  <div className="text">
                    <p>Invoice Paid</p>
                    <p>$25,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
