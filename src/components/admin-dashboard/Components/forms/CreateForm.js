import React from "react";
import FormInput from "./FormInput";

function CreateForm() {
  return (
    <div className="form-container">
      <form>
        <FormInput
          name={"Name"}
          type={"text"}
          required={"required"}
          placeholder={"Enter your name"}
          className={"form-input"}
          label={"Name :"}
        />

        <FormInput
          name={"email"}
          type={"email"}
          required={"required"}
          placeholder={"demo@demo.com"}
          className={"form-input"}
          label={"Email : "}
        />

        <FormInput
          name={"pass"}
          type={"password"}
          required={"required"}
          className={"form-input"}
          placeholder={"password"}
          label={"Password : "}
        />

        <FormInput
          name={"confirm-pass"}
          type={"password"}
          required={"required"}
          className={"form-input"}
          placeholder={"Confirm password"}
          label={"Confirm Password :"}
        />

        <FormInput
          name={"Phone-Number"}
          type={"number"}
          required={"required"}
          className={"form-input"}
          placeholder={"enter your contact number"}
          label={"Mobile Number :"}
        />

        <FormInput
          name={"Profile-img"}
          type={"file"}
          required={"required"}
          className={"form-input"}
          label={"Profile Image : "}
        />

        <FormInput
          name={"skills"}
          type={"text"}
          required={"required"}
          className={"form-input"}
          placeholder={"Enter your skills"}
          label={"Skills : "}
        />

        <FormInput
          name={"experience"}
          type={"text"}
          required={"required"}
          className={"form-input"}
          placeholder={"Enter your experience"}
          label={"Experience : "}
        />

        <FormInput
          name={"project"}
          type={"text"}
          required={"required"}
          className={"form-input"}
          placeholder={"Enter your project"}
          label={"Project : "}
        />

        <FormInput
          name={"assignedTeam"}
          type={"text"}
          required={"required"}
          className={"form-input"}
          placeholder={"This will be a drop down"}
          label={"Assigned Team : "}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateForm;
