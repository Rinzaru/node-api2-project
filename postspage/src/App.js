import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts")
      .then((resp) => {
        setPosts(resp.data);
        console.log(resp);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Hi</h1>
      <p>Posts: </p>
      {posts.map((post) => (
        <div key={post.id}>
          <span>-------------</span>
          <p>Title: {post.title}</p>
          <p> Contents: {post.contents}</p>
          <span>-------------</span>
        </div>
      ))}
    </div>
  );
}

export default App;
