import React from "react";
import { useState } from "react";

const initialValue = { todo: "", isDone: false };

function Input({ todos, addTodo }) {
  const [input, setInput] = useState(initialValue);

  function onChangeInput(e) {
    setInput({ ...input, todo: `${e.target.value}` });
  }

  function onSubmit(e) {
    e.preventDefault();
    if (input.todo === "") {
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
          value={input.todo}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Input;
