import React from "react";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";
import data from "./data.json";

const App = () => {
  return (
    <div>
      <Example1 SocialMedias={data.SocialMedias} />
      <Example2 Skills={data.Skills} />
      <Example3 Experiences={data.Experiences} />
    </div>
  );
};

export default App;
