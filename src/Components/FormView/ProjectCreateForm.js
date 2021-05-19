import React from "react";
import FormInput from "./FormInput";
import Button from "../ButtonView";
import PropTypes from "prop-types";

const ProjectCreateForm = (props) => {
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
      placeholder: "Name of the project",
      className: "form-input",
      label: "Project Name :",
    },
    {
      name: "description",
      type: "text",
      required: "required",
      placeholder: "description",
      className: "form-input",
      label: "Description : ",
    },
    {
      name: "Time Line",
      type: "text",
      required: "required",
      className: "form-input",
      label: "Deadline : ",
    },
    {
      name: "TechStack",
      type: "text",
      required: "required",
      className: "form-input",
      placeholder: "Tech stack",
      label: "Technology  : ",
    },
    {
      name: "requirement",
      type: "text",
      required: "required",
      className: "form-input",
      placeholder: "Enter your Requirement",
      label: "Requirement : ",
    },
    {
      name: "clientName",
      type: "text",
      required: "required",
      className: "form-input",
      placeholder: "Enter your Client Name",
      label: "Client Name : ",
    },
    {
      name: "clientLocation",
      type: "textarea",
      required: "required",
      className: "form-input",
      placeholder: "Location",
      label: "Client Location : ",
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

ProjectCreateForm.propType = {
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

export default ProjectCreateForm;
