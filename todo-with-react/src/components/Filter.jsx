import React from "react";

function Filter({ todos, setStatus, setTodos }) {
  const changeStatus = (e) => {
    setStatus(e.target.id);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed === false));
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length} </strong>
        items left
      </span>

      <ul className="filters">
        <li className="selected" onClick={changeStatus} id="all">
          <a href="">All</a>
        </li>
        <li onClick={changeStatus} id="active">
          <a href="">Active</a>
        </li>
        <li onClick={changeStatus} id="completed">
          <a href="">Completed</a>
        </li>
      </ul>
      <button className="clear-completed" onClick={clearCompleted}>
        Clear Completed
      </button>
    </footer>
  );
}

export default Filter;
