export interface ToDo {
  id: number;
  toDo: string;
  isDone: boolean;
}

// type Actions =
//   | { type: "add"; payload: string }
//   | { type: "remove"; payload: number }
//   | { type: "done"; payload: number };

// const ToDoReducer = (state: ToDo[], action: Actions) => {
//   switch (action.type) {
//     case "add":
//       return [
//         ...state,
//         { id: Date.now(), toDo: action.payload, isDone: false },
//       ];
//     case "remove":
//       return state.filter((toDo) => toDo.id !== action.payload);
//     case "done":
//       return state.map((toDo) =>
//         toDo.id !== action.payload ? { ...toDo, isDone: !toDo.isDone } : toDo,
//       );
//     default:
//       return state;
//   }
// };

// import { useReducer } from "react";

// const reducerExample = () => {
//   const [state, dispatch] = useReducer(ToDoReducer, []);
// };
