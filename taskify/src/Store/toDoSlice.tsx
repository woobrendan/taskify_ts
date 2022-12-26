import { createSlice } from "@reduxjs/toolkit";
import { ToDo } from "../model";

const toDoSlice = createSlice({
  name: "tasks",
  initialState: { toDos: [] },
  reducers: {
    addToDo(state, action) {},
    removeTodo(state, action) {},
    completeToDo(state, action) {},
  },
});

export const toDoActions = toDoSlice.actions;

export default toDoSlice;
