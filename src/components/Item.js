import React from "react";

const Item = function (props) {
  return (
    <React.Fragment>
      <li className="item">
        <div className="item__content">{props.content}</div>
        <button className="item__delete" onClick={props.delete}>
          X
        </button>
      </li>
    </React.Fragment>
  );
};

export default Item;
