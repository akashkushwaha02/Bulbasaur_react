import React from "react";

const FormInput = (props) => {
  const { label, name, type, required, placeholder, className } = props.input;
  return (
    <div className="form-group">
      <div className="form-label">
        <label>{label}</label>
      </div>
      <div className="form-input">
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={className}
        />
      </div>
    </div>
  );
};

export default FormInput;
