import React from "react";

function Filter({ todos, filteredTodos, setStatus, setTodos }) {
  const changeStatus = (e) => {
    setStatus(e.target.id);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed === false));
  };

  return (
    <div>
      <span>{todos.length} item</span>
      <button onClick={changeStatus} id="all">
        all
      </button>
      <button onClick={changeStatus} id="active">
        active
      </button>
      <button onClick={changeStatus} id="completed">
        completed
      </button>
      <span onClick={clearCompleted}>Clear Completed</span>
    </div>
  );
}

export default Filter;
