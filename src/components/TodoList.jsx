import React from "react";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({
  todos,
  handleCompleteTodo,
  handleUpdateTodo,
  handleDeleteTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleCompleteTodo={handleCompleteTodo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
