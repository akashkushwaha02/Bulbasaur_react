import React from "react";
import { Link } from "react-router-dom";

const ProjectNav = ({ CreateProjectformValue }) => {
  return (
    <div className="">
      <Link
        to={{ pathname: "/project/create", props: CreateProjectformValue }}
        exact
        style={{ color: "black" }}
      >
        Create Project
      </Link>
    </div>
  );
};

export default ProjectNav;
