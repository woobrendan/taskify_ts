import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { ToDo } from "../model";

interface ToDoState {
  toDos: ToDo[];
  completedToDos: ToDo[];
  allToDos: ToDo[];
}

const initialState: ToDoState = { toDos: [], completedToDos: [], allToDos: [] };

const toDoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addToDo(state, action: PayloadAction<string>) {
      const newTask = { id: Date.now(), toDo: action.payload, isDone: false };
      state.toDos = [...state.toDos, newTask];
      state.allToDos = [...state.allToDos, newTask];
    },
    removeToDo(state, action: PayloadAction<number>) {
      state.toDos = state.toDos.filter((task) => task.id !== action.payload);
      state.completedToDos = state.completedToDos.filter(
        (task) => task.id !== action.payload,
      );
    },
    completeToDo(state, action: PayloadAction<number>) {
      // [...state.toDos, ...state.completedToDos].find;
      state.toDos = state.toDos
        .map((task) => {
          if (task.id === action.payload) {
            task = { ...task, isDone: !task.isDone };
            state.completedToDos.push(task);
            return task;
          } else return task;
        })
        .filter((task) => task.id !== action.payload);

      state.completedToDos = state.completedToDos
        .map((task) => {
          if (task.id === action.payload) {
            task = { ...task, isDone: !task.isDone };
            state.toDos.push(task);
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
