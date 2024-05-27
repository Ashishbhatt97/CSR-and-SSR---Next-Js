"use client";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((todo) => todo.json())
    .then((res) => setTodos(res));

  if (todos.length === 0) return <div>Loading.....</div>;

  return (
    <main>
      {todos.map((res: any) => (
        <li key={res?.id!}>{res?.title}</li>
      ))}
    </main>
  );
}
