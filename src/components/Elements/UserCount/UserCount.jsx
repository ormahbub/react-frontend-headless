import "./UserCount.css";
import user1 from "../../../assets/user-images/user-1.jpg";
import user2 from "../../../assets/user-images/user-2.jpg";
import user3 from "../../../assets/user-images/user-3.jpg";
import user4 from "../../../assets/user-images/user-4.jpg";

const UserCount = () => {
  return (
    <div className="user-count">
      <div className="user-images">
        <img className="user-1" src={user1} alt="User 1" />
        <img className="user-2" src={user2} alt="User 2" />
        <img className="user-3" src={user3} alt="User 3" />
        <img className="user-4" src={user4} alt="User 4" />
      </div>
      <div className="user-text">
        <h3>9K+ users</h3>
        <a href="#">
          <p>Join our community</p>
        </a>
      </div>
    </div>
  );
};

export default UserCount;
