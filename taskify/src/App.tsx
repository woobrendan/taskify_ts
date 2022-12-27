import React, { useState } from "react";
import "./Styles/App.scss";
import InputField from "./Components/InputField";
import ToDoList from "./Components/ToDoList";
import { useAppDispatch, useAppSelector } from "./Store/hooks";
import { toDoActions } from "./Store/toDoSlice";

//React functional component
const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const dispatch = useAppDispatch();

  const toDos = useAppSelector((state) => state.toDo.toDos);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (toDo) {
      dispatch(toDoActions.addToDo(toDo));
      setToDo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
      <ToDoList toDos={toDos} />
    </div>
  );
};

export default App;
