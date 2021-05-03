import React from "react";

function FormInput({ name, type, required, placeholder, className, label }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
}

export default FormInput;
