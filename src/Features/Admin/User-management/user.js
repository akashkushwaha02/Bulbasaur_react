import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import CreateForm from "../Components/forms/CreateForm";
import UserNav from "./userNav";

function User() {
  return (
    <div className="user">
      <UserNav />

      <CreateForm />
    </div>
  );
}

export default User;
