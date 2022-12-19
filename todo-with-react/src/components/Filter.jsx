import React from "react";

function Filter({ todos, setStatus, setTodos }) {
  const changeStatus = (e) => {
    e.preventDefault();
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
        <li className="selected" onClick={(e)=>changeStatus(e)} id="all">
          All
        </li>
        <li onClick={(e)=>changeStatus(e)} id="active">
          Active
        </li>
        <li onClick={(e)=>changeStatus(e)} id="completed">
          Completed
        </li>
      </ul>
      <button className="clear-completed" onClick={clearCompleted}>
        Clear Completed
      </button>
    </footer>
  );
}

export default Filter;
