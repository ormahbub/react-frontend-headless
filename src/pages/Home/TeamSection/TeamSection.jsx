import "./TeamSection.css";
import chartImage from "../../../assets/chart-image.jpg";
import Button from "../../../components/Elements/Button/Button";

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container">
        <div className="left-content">
          <p className="section-subtitle">Exclusive Services</p>
          <h3 className="section-title">A Team Of Experts You Can Trust</h3>
          <p className="text-content">
            Himenaeos mus porttitor pretium rutrum quisque efficitur quisque
            libero tristique ultricies himenaeos donec ad tincidunt magna.
          </p>
          <p className="text-content">
            Condimentum netus feugiat risus porttitor viverra, suscipit sociosqu
            bibendum rutrum placerat cras aliquam.
          </p>
          <Button />
        </div>
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
