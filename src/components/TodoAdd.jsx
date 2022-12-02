import React, { useState } from "react";
import { useForm } from "../hooks/useForm.js";

const TodoAdd = ({ handleNewTodo }) => {
  const {
    form: { description },
    reset,
    onInputChange,
  } = useForm({ description: "" });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) return;

    let newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    handleNewTodo(newTodo);
    reset();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        className="input-add"
        name="description"
        placeholder="What do you want to do?"
        value={description}
        onChange={onInputChange}
        autoComplete="off"
      />

      <button className="btn-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoAdd;
