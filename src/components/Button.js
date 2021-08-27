import React from "react";

const Button = function (props) {
  return (
    <React.Fragment>
      <button type="#" className="btn" onClick={props.click}>
        {props.content}
      </button>
    </React.Fragment>
  );
};

export default Button;
