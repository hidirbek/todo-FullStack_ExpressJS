import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [update, setUpdate] = useState(false);
  const createTodo = (e) => {
    e.preventDefault();

    const { title } = e.target;

    fetch("http://localhost:3000/", {
      method: "POST",
      body: JSON.stringify({
        title: title.value,
      }),
    }).then((res) => {
      res.json();
      if (res.ok) {
        setUpdate((prev) => !prev);
        title.value = "";
      }
    });
  };
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((todo) => setTodos(todo));
  }, [update]);

  // const checkboxChanged = (e)=> {
  //   // const [check, setCheck] = useState(false)
  //   console.log(e.target);
  // }

  return (
    <div className="container">
      <form className="site-form" onSubmit={(e) => createTodo(e)}>
        <input
          required
          name="title"
          className="input"
          type="text"
          placeholder="New task..."
        />
      </form>
      <div className="task-category">
        <p className="category-links">All</p>
        <p className="category-links">Active</p>
        <p className="category-links">Completed</p>
      </div>
      <div className="task-wrapper">
        {todos.map((el) => {
          return (
            <div key={el.id} className="tasks">
              <input
                /*onChange={(e)=>checkboxChanged(e)} checked={el.checked} */ className="checkbox"
                type="checkbox"
              />
              <p className="todo-title">{el.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
