import React from "react";
import PostList from "./PostList";
import data from "./data.json"; // Assuming data.json is in the same directory as App.js

const App = () => {
  return (
    <div>
      <PostList posts={data} />
    </div>
  );
};

export default App;
