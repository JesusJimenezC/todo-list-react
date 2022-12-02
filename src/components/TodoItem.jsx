import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import TodoUpdate from "./TodoUpdate.jsx";

const TodoItem = ({
  todo,
  handleUpdateTodo,
  handleCompleteTodo,
  handleDeleteTodo,
}) => {
  return (
    <li>
      <span onClick={() => handleCompleteTodo(todo.id)}>
        <label
          htmlFor=""
          className={`container-done ${todo.done ? "active" : ""}`}
        ></label>
      </span>
      <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
      <button onClick={() => handleDeleteTodo(todo.id)} className="btn-delete">
        <FaTrash />
      </button>
    </li>
  );
};

export default TodoItem;
