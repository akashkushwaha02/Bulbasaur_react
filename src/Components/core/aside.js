import React from "react";
import Navbar from "../NavbarView/navbar";
import Avatar from "../../Assets/img/avatar.png";
import { Link } from "react-router-dom";
import Profile from "../profile/profile";

function Aside() {
  return (
    <div class="aside">
      <div className="aside-top">
        <div className="icon">
          <img src={Avatar} alt="" />
        </div>
        <Navbar />
      </div>
      <div className="aside-bottom">
        <div className="profile-img">
          <img src={Avatar} alt="" />
        </div>
        <div className="MyAccout">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Aside;
