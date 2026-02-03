import "./Home.css";
import Hero from "./Hero/Hero";
import RecentPosts from "./RecentPosts/RecentPosts";

const Home = () => {
  return (
    <div className="home" id="home">
      <Hero />
      <RecentPosts />
    </div>
  );
};

export default Home;
