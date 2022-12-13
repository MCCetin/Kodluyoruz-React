import { useState, useEffect } from "react";
import Input from "./components/Input.jsx";
import List from "./components/List.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Input todos={todos} addTodo={setTodos} />
      <List todos={todos}/>
    </div>
  );
}

export default App;
