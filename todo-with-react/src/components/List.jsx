import React from "react";

function List({ todos, setTodo }) {
  const list = todos.map((todo, i) => (
    <li key={todo + i} className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
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
        <label>{todo.text}</label>
        <button
          className="destroy"
          onClick={() => {
            setTodo(
              todos.filter((item) => {
                return item.id !== todo.id;
              })
            );
          }}
        ></button>
      </div>
    </li>
  ));
  return <ul className="todo-list">{list}</ul>;
}

export default List;
