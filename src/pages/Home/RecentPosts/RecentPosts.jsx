import PostLoop from "../../../components/PostLoop/PostLoop";
import "./RecentPosts.css";

const RecentPosts = () => {
  return (
    <div className="recent-posts">
      <div className="section-head">
        <h3>Recent Posts</h3>
        <p>Find all of our recent posts here.</p>
      </div>
      <div className="section-content">
        <div className="blog-posts">
          <PostLoop />
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
