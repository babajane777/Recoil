// import { Component } from "react";

export function Todo({todo, deleteTodo}) {

    return (
      <div className="todo">
        <p>{todo.todo}</p>
        <button onClick={deleteTodo}>x</button>
      </div>
    );
  }

