import React, { useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useForm } from "../hooks/useForm.js";

const TodoUpdate = ({ todo, handleUpdateTodo }) => {
  const {
    onInputChange,
    reset,
    form: { description },
  } = useForm({
    description: todo.description,
  });

  const [disabled, setDisabled] = useState(true);
  const focusInputRef = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) return;

    let updatedTodo = {
      id: todo.id,
      description: description,
    };

    handleUpdateTodo(updatedTodo);
    setDisabled(!disabled);
    focusInputRef.current.focus();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        className={`input-update ${todo.done ? "text-decoration-dashed" : ""}`}
        name="description"
        value={description}
        onChange={onInputChange}
        placeholder="What do you want to do?"
        readOnly={disabled}
        ref={focusInputRef}
        autoComplete="off"
      />

      <button className="btn-edit" type="submit">
        <FaEdit />
      </button>
    </form>
  );
};

export default TodoUpdate;
