import React from "react";
import { useState } from "react";

const initialValue = { text: "", completed: false };

function Input({ todos, addTodo }) {
  const [input, setInput] = useState(initialValue);

  function onChangeInput(e) {
    setInput({ ...input, text: `${e.target.value}`, id: Date.now() });
  }

  function onSubmit(e) {
    e.preventDefault();
    if (input.text === "") {
      return false;
    }
    addTodo([...todos, input]);
    setInput(initialValue);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChangeInput}
          placeholder="To Do"
          value={input.text}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Input;
