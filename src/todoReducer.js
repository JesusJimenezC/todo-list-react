// TODO Structure
// {
//   id: 0,
//   description: 'Learn Redux',
//   done: false
// }

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [action.payload, ...state];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "COMPLETE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, description: action.payload.description }
          : todo
      );
    default:
      return state;
  }
};
