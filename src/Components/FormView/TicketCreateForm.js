import React from "react";
import FormInput from "./FormInput";
import Button from "../ButtonView";
import PropTypes from "prop-types";

const TicketCreateForm = (props) => {
  const {
    type = "",
    placeholder = "",
    required = "",
    disabled = "",
    name = "",
    id = "",
    value = "",
    border = "",
    outline = "",
    fontSize = "",
    backgroundColor = "",
    padding = "",
    icons = "",
    hover = "",
    label = "",
  } = props;

  let CreateProjectformValue2 = [
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
    <div className="form-container">
      <form>
        {CreateProjectformValue2.map((element, i) => {
          return <FormInput input={element} key={i} />;
        })}

        <Button />
      </form>
    </div>
  );
};

TicketCreateForm.propType = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.string.isRequired,
  disabled: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  border: PropTypes.string,
  outline: PropTypes.string,
  fontSize: PropTypes.string,
  backgroundColor: PropTypes.string,
  padding: PropTypes.string,
  icons: PropTypes.string,
  hover: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default TicketCreateForm;
