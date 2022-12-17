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
    <header class="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          onChange={onChangeInput}
          placeholder="To Do"
          value={input.text}
        />
      </form>
    </header>
  );
}

export default Input;
