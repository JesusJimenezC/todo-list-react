import "./App.css";

import TodoList from "./components/TodoList.jsx";
import TodoAdd from "./components/TodoAdd.jsx";
import { useTodo } from "./hooks/useTodo.js";

function App() {
  const {
    handleNewTodo,
    handleCompleteTodo,
    handleDeleteTodo,
    handleUpdateTodo,
    todos,
    countTodos,
    pendingTodos,
  } = useTodo();

  return (
    <>
      <div className="card-to-do">
        <h1>Todo List</h1>
        <div className="counter-todos">
          <h3>Todo No: {countTodos}</h3>
          <h3>Pending Todos: {pendingTodos}</h3>
        </div>

        <div className="add-todo">
          <h3>Add Todo</h3>
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>

        <TodoList
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      </div>
    </>
  );
}

export default App;
