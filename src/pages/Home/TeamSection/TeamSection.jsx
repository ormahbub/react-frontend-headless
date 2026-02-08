import "./TeamSection.css";
import chartImage from "../../../assets/chart-image.jpg";

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container">
        <div className="left-content"></div>
        <div className="right-content">
          <div className="image-box">
            <img src={chartImage} alt="Chart" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
