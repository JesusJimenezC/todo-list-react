import { todoReducer } from "../todoReducer.js";
import { useEffect, useReducer } from "react";

export const useTodo = () => {
  const state = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, state, init);

  const countTodos = todos.length;
  const pendingTodos = todos.filter((todo) => !todo.done).length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "ADD_TODO",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "DELETE_TODO",
      payload: { id },
    };

    dispatch(action);
  };

  const handleCompleteTodo = (id) => {
    const action = {
      type: "COMPLETE_TODO",
      payload: { id },
    };

    dispatch(action);
  };

  const handleUpdateTodo = ({ id, description }) => {
    const action = {
      type: "UPDATE_TODO",
      payload: { id, description },
    };

    dispatch(action);
  };

  return {
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
    countTodos,
    pendingTodos,
    todos,
  };
};
