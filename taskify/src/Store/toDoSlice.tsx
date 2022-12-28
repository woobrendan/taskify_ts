import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { ToDo } from "../model";

interface ToDoState {
  toDos: ToDo[];
  completedToDos: ToDo[];
}

const initialState: ToDoState = { toDos: [], completedToDos: [] };

const toDoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addToDo(state, action: PayloadAction<string>) {
      state.toDos = [
        ...state.toDos,
        { id: Date.now(), toDo: action.payload, isDone: false },
      ];
    },
    removeToDo(state, action: PayloadAction<number>) {
      state.toDos = state.toDos.filter((task) => task.id !== action.payload);
    },
    completeToDo(state, action: PayloadAction<number>) {
      state.toDos = state.toDos
        .map((task) => {
          if (task.id === action.payload) {
            task = { ...task, isDone: true };
            state.completedToDos.push(task);
            return task;
          } else return task;
        })
        .filter((task) => task.id !== action.payload);
    },
    editToDo(state, action: PayloadAction<{ id: number; value: string }>) {
      state.toDos = state.toDos.map((task) =>
        task.id === action.payload.id
          ? { ...task, toDo: action.payload.value }
          : task,
      );
    },
  },
});

export const toDoActions = toDoSlice.actions;

export const selectToDos = (state: RootState) => state.toDo.toDos;

export default toDoSlice;
