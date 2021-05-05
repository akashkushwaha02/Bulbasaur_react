import React from "react";
import { Link } from "react-router-dom";

const TeamNav = () => {
  return (
    <div>
      <h1>
        <Link to="/team/create" exact style={{ color: "black" }}>
          Create Team
        </Link>
      </h1>
    </div>
  );
};

export default TeamNav;
