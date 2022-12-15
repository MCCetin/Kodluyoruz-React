import React from "react";

function List({ todos, setTodo }) {
  const list = todos.map((todo, i) => (
    <li key={todo + i}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
          setTodo(
            todos.map((item) => {
              return item.id === todo.id
                ? { ...item, completed: !item.completed }
                : item;
            })
          );
        }}
      />
      <span>{todo.text}</span>
      <button
        onClick={() => {
          setTodo(
            todos.filter((item) => {
              return item.id !== todo.id;
            })
          );
        }}
      >
        Delete
      </button>
    </li>
  ));
  return <ul>{list}</ul>;
}

export default List;
