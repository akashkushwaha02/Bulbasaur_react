import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import CoverForm from "../../../Components/cards/CoverCard";

import UserNav from "./UserNav";

function User() {
  return (
    <div className="user">
      {/**
       * TODO:- will change the router here
       *
       * <CreateForm />
       */}

      <UserNav />

      {/*<CoverForm />*/}
    </div>
  );
}

export default User;
