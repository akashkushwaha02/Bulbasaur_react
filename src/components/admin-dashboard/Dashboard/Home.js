import React from "react";
import Aside from "../Components/core/aside";
import Main from "../Components/core/main";

function Home() {
  return (
    <div className="home">
      <div className="aside">
        <Aside />
      </div>
      <div className="main">
        <Main />
      </div>
    </div>
  );
}

export default Home;
