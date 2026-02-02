import { useEffect, useState } from "react";
import Form from "./Form";
import Header from "./Header";
import Layout from "./Layout";
import Lists from "./Lists";
import "./styles/Style.css";

function App() {
  const [error, setError] = useState(null);

  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const submitHandler = (e) => {
    e.preventDefault();
    //console.log("submit");
    if (todo.length < 5) {
      setError("da");
      return false;
    }
    setTodos([...todos, { id: Date.now(), title: todo, done: false }]);
    setError(null);
  };

  const delHandler = (id) => {
    const updateTodos = todos.filter((item) => item.id !== id);
    setTodos(updateTodos);
  };

  const doneHandler = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );

    setTodos(updatedTodos);
    console.log(todos);
  };

  return (
    <Layout>
      <Header />
      <Form
        todo={todo}
        change={(e) => setTodo(e.target.value)}
        submit={submitHandler}
        error={error}
      />
      <Lists del={delHandler} done={doneHandler} todos={todos} />
    </Layout>
  );
}

export default App;
