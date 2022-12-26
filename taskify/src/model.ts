export interface ToDo {
  id: number;
  toDo: string;
  isDone: boolean;
}

type Actions =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "done"; payload: number };

const ToDoReducer = (state: ToDo[], action: Actions) => {};

import { useReducer } from "react";

const reducerExample = () => {
  const [state, dispatch] = useReducer(ToDoReducer, []);
};
