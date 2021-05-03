import React from "react";
import { Link } from "react-router-dom";

function UserNav() {
  return (
    <div>
      <h1>
        <Link to="/user/create" exact style={{ color: "black" }}>
          Create Link
        </Link>
      </h1>
      <h1>
        <Link to="/user/edit" exact style={{ color: "black" }}>
          Edit Link
        </Link>
      </h1>
      <h1>
        <Link to="/user/delete" exact style={{ color: "black" }}>
          delete Link
          {/**
           * no need fof thsi we will implement alert/button  */}
        </Link>
      </h1>
    </div>
  );
}

export default UserNav;
