import { useEffect, useState } from "react";
import { getPosts } from "./services/api";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>WordPress Posts</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
