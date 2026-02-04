import "./PostLoop.css";
import imagePlaceholder from "../../assets/placeholder.png";

const PostLoop = () => {
  return (
    <a href="#" className="blog-post">
      <div className="blog-image">
        <img src={imagePlaceholder} alt="Blog Post" />
      </div>
      <h3 className="blog-title">How to make a wordpress website</h3>
      <p className="blog-details">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A cum totam
        consectetur modi quas provident ducimus quis itaque perspiciatis harum
        nam corporis inventore libero, nostrum fugiat asperiores blanditiis
        incidunt corrupti!
      </p>
      <a href="#" className="btn">Read</a>
    </a>
  );
};

export default PostLoop;
