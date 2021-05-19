import React from "react";
import Navbar from "../NavbarView/navbar";
import Avatar from "../../Assets/img/avatar.png";
import { Link } from "react-router-dom";

function Aside() {
  return (
    <div className="aside">
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
          <Link to="/profile" exact>
            My Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Aside;
