import React from "react";
import Navbar from "../navbar/navbar";

function Aside() {
  return (
    <div class="aside">
      <div className="aside-top">
        <div className="icon">
          <img src="../../../../assets/img/avatar.png" />
        </div>
        <Navbar />
      </div>
      <div className="aside-bottom">
        <div className=""></div>
      </div>
    </div>
  );
}

export default Aside;
