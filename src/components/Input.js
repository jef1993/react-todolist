import React from "react";
import { useState } from "react";
import Button from "./Button";
import Item from "./Item";

function Input() {
  const [input, setInput] = useState("");
  const [note, setNote] = useState([]);

  const handleChange = function (e) {
    setInput(e.target.value);
  };

  const addItem = function () {
    let notes = [...note];
    notes.push(input);
    setNote(notes);
    setInput("");
  };

  const delItem = (index) => {
    let notes = [...note];
    notes.splice(index, 1);
    setNote(notes);
  };

  return (
    <div>
      <input
        type="text"
        className="input"
        value={input}
        placeholder="Write Something"
        onChange={handleChange}
      ></input>
      <Button click={addItem} content="Enter" />
      <ul className="list">
        {note.map((el, i) => {
          return (
            <Item
              content={el}
              key={i}
              delete={() => {
                delItem(i);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}

// const Item = function (props) {
//   return (
//     <React.Fragment>
//       <li className="item">
//         <div className="item__content">{props.content}</div>
//         <button className="item__delete" onClick={props.delete}>
//           X
//         </button>
//       </li>
//     </React.Fragment>
//   );
// };

export default Input;
