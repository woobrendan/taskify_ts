import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { ToDo } from "../model";

interface ToDoState {
  toDos: ToDo[];
}

const initialState: ToDoState = { toDos: [] };

const toDoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addToDo(state, action) {
      state.toDos = [
        ...state.toDos,
        { id: Date.now(), toDo: action.payload, isDone: false },
      ];
    },
    removeToDo(state, action) {
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
