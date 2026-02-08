import "./Home.css";
import Hero from "./Hero/Hero";
import RecentPosts from "./RecentPosts/RecentPosts";
import TeamSection from "./TeamSection/TeamSection";

const Home = () => {
  return (
    <div className="home" id="home">
      <Hero />
      <RecentPosts />
      <TeamSection />
    </div>
  );
};

export default Home;
