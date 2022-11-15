import React from "react";
import Todo from "./Todo";
export default function TodoList({ data, setData }) {
  return (
    <div className="todo-list">
      {data.map((x, i) => (
        <Todo data={x} completeData={data} key={i} setData={setData}></Todo>
      ))}
    </div>
  );
}
