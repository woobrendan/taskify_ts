import React, { useState } from "react";
import "./Styles/App.scss";
import InputField from "./Components/InputField";
import ToDoList from "./Components/ToDoList";
import { useAppDispatch } from "./Store/hooks";
import { toDoActions } from "./Store/toDoSlice";
import { DragDropContext } from "react-beautiful-dnd";

//React functional component
const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (toDo) {
      dispatch(toDoActions.addToDo(toDo));
      setToDo("");
    }
  };

  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
        <ToDoList />
      </div>
    </DragDropContext>
  );
};

export default App;
