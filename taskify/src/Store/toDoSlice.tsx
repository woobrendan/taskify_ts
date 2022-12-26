import { createSlice } from "@reduxjs/toolkit";
import { ToDo } from "../model";

const toDoSlice = createSlice({
  name: "tasks",
  initialState: { toDos: [] as ToDo[] },
  reducers: {
    addToDo(state, action) {
      state.toDos = [
        ...state.toDos,
        { id: Date.now(), toDo: action.payload, isDone: false },
      ];
    },
    removeTodo(state, action) {
      state.toDos = state.toDos.filter((task) => task.id !== action.payload);
    },
    completeToDo(state, action) {
      state.toDos = state.toDos.map((task) =>
        task.id !== action.payload ? { ...task, isDone: !task.isDone } : task,
      );
    },
  },
});

export const toDoActions = toDoSlice.actions;

export default toDoSlice;
