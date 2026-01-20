const API_BASE = "http://localhost/wp_11_reactWP/wp-json";

export const getPosts = async () => {
  const res = await fetch(`${API_BASE}/wp/v2/posts`);
  return res.json();
};
