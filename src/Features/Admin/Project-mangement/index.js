import React from "react";
import ProjectNav from "./projectNav";
import Table from "../../../Components/TableView";
import Text from "../../../Components/TextView";
import Search from "../../../Components/SearchView";
import Filter from "../../../Components/Filter";
import Pagination from "../../../Components/Pagination";
import "./style.css";

const Project = () => {
  let theadField = ["Title", "Name", "Date", "Edit", "Delete"];
  let tbodyData = [
    {
      title: "Project1",
      name: "Project1",
      Date: "22-01-2021",
      edit: "Edit",
      delete: "Delete",
    },
    {
      title: "Project1",
      name: "Project1",
      Date: "22-01-2021",
      edit: "Edit",
      delete: "Delete",
    },
  ];
  let CreateProjectformValue = [
    {
      name: "name",
      type: "text",
      required: "required",
      placeholder: "Enter your name",
      className: "form-input",
      label: "Name :",
    },
    {
      name: "email",
      type: "email",
      required: "required",
      placeholder: "demo@demo.com",
      className: "form-input",
      label: "Email : ",
    },
    {
      name: "pass",
      type: "password",
      required: "required",
      className: "form-input",
      placeholder: "password",
      label: "Password : ",
    },
    {
      name: "confirm-pass",
      type: "password",
      required: "required",
      className: "form-input",
      placeholder: "Confirm password",
      label: "Confirm Password :",
    },
    {
      name: "Phone-Number",
      type: "number",
      required: "required",
      className: "form-input",
      placeholder: "enter your contact number",
      label: "Mobile Number :",
    },
    {
      name: "Profile-img",
      type: "file",
      required: "required",
      className: "form-input",
      label: "Profile Image : ",
    },
    {
      name: "skills",
      type: "text",
      required: "required",
      className: "form-input",
      placeholder: "Enter your skills",
      label: "Skills : ",
    },
    {
      name: "experience",
      type: "text",
      required: "required",
      className: "form-input",
      placeholder: "Enter your experience",
      label: "Experience : ",
    },
    {
      name: "project",
      type: "text",
      required: "required",
      className: "form-input",
      placeholder: "Enter your project",
      label: "Project : ",
    },
    {
      name: "assignedTeam",
      type: "textarea",
      required: "required",
      className: "form-input",
      placeholder: "This will be a drop down",
      label: "Assigned Team : ",
    },
  ];

  return (
    <div className="project">
      <Text titleName="Projects" />
      <div className="d-flex-center-space-bw">
        <span>
          <Search />
          <Filter />
        </span>
        <span>
          <ProjectNav CreateProjectformValue={CreateProjectformValue} />
        </span>
      </div>

      <Table thead={theadField} tbody={tbodyData}></Table>
      <div className="d-flex">
        <Pagination />
      </div>
    </div>
  );
};

export default Project;
