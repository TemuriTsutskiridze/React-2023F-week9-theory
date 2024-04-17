import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [posts, setPosts] = useState<TPosts>(null);
  const [todos, setTodos] = useState<TTodos>(null);

  async function fetchPosts() {
    try {
      // const response = await fetch(
      //   "https://jsonplaceholder.typicode.com/posts"
      // );
      // if (!response.ok) {
      //   throw new Error("Failed to fetch posts");
      // }
      // const data = await response.json();

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = response.data;
      console.log(data);
      setPosts(data);

      // const todoResponse = await axios.patch(
      //   "http://localhost:3000/todos/1",
      //   {
      //     completed: false,
      //   },
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );
      // if (todoResponse.status >= 300 || todoResponse.status <= 199) {
      //   throw new Error("Failed to update todo");
      // }

      // const addTodoResponse = await axios.post("http://localhost:3000/todos", {
      //   todo: "Write a quizz",
      //   completed: false,
      // });
      // if (addTodoResponse.status >= 300 || addTodoResponse.status <= 199) {
      //   throw new Error("Failed to add new ToDo");
      // }

      const todoResponse = await axios.get("http://localhost:3000/todos");
      const todos = todoResponse.data;
      setTodos(todos);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <h1>Posts</h1>
      {posts?.map((post: TPost) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })}

      <h1>Todos</h1>
      {todos?.map((todo) => {
        return (
          <div key={todo.id}>
            <h2>{todo.todo}</h2>
            <p>{todo.completed.toString()}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
