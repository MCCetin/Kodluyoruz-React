import { useState, useEffect } from "react";
import Input from "./components/Input.jsx";
import List from "./components/List.jsx";
import Filter from "./components/Filter.jsx";
import "./style.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    (() => {
      switch (status) {
        case "active":
          setFilteredTodos(todos.filter((todos) => !todos.completed));
          break;
        case "completed":
          setFilteredTodos(todos.filter((todos) => todos.completed));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    })();
  }, [status, todos]);

  return (
    <section className="App todoapp">
      <Input todos={todos} addTodo={setTodos} />
      <List todos={filteredTodos} setTodo={setTodos} />
      <Filter
        todos={todos}
        filteredTodos={filteredTodos}
        setStatus={setStatus}
        setTodos={setTodos}
      />
    </section>
  );
}

export default App;
