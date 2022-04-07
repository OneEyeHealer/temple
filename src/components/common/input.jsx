import React, { Fragment } from "react";
const Input = ({ name, label, readonly, error, ...rest }) => {
  return (
    <Fragment>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          {...rest}
          name={name}
          id={name}
          placeholder={`Write ${label}`}
          className="form-control"
          readOnly={name === "submitDate"}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </Fragment>
  );
};

export default Input;
