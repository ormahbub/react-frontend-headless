import LevelCard from "../../../components/Elements/LevelCard/LevelCard";
import "./LevelCards.css";

const LevelCards = () => {
  return (
    <section className="level-cards">
      <div className="container">
        <h3 className="section-title">
          Choose The Right Level Of Risk For Different Chonks Of You Change
        </h3>
        <div className="level-card-gird">
          <LevelCard />
          <LevelCard />
          <LevelCard />
          <LevelCard />
        </div>
      </div>
    </section>
  );
};

export default LevelCards;
