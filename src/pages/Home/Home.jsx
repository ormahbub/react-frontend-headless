import "./Home.css";
import Hero from "./Hero/Hero";
import RecentPosts from "./RecentPosts/RecentPosts";
import TeamSection from "./TeamSection/TeamSection";
import LevelCards from "./LevelCards/LevelCards";

const Home = () => {
  return (
    <div className="home" id="home">
      <Hero />
      <RecentPosts />
      <TeamSection />
      <LevelCards />
    </div>
  );
};

export default Home;
