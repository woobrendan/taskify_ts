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
    removeTodo(state, action) {},
    completeToDo(state, action) {},
  },
});

export const toDoActions = toDoSlice.actions;

export default toDoSlice;
