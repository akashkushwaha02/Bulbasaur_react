import React from "react";
import FormInput from "./FormInput";
import Button from "../ButtonView";
import PropTypes from "prop-types";

const TeamCreateForm = (props) => {
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

  let CreateTeamformValue2 = [
    {
      name: "name",
      type: "text",
      required: "required",
      placeholder: "Enter team name",
      className: "form-input",
      label: "Team Name :",
    },
    {
      name: "description",
      type: "text",
      placeholder: "description",
      className: "form-input",
      label: "Description : ",
    },
    {
      name: "logo",
      type: "file",
      required: "required",
      className: "form-input",
      label: "Logo : ",
    },
    {
      name: "skills",
      type: "text",
      required: "required",
      className: "form-input",
      label: "Skills : ",
    },
  ];

  return (
    <div className="form-container">
      <form>
        {CreateTeamformValue2.map((element, i) => {
          return <FormInput input={element} key={i} />;
        })}

        <Button />
      </form>
    </div>
  );
};

TeamCreateForm.propType = {
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

export default TeamCreateForm;
