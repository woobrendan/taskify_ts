import React, { useState } from "react";
import "./Styles/App.scss";
import InputField from "./Components/InputField";
import ToDoList from "./Components/ToDoList";
import { useAppDispatch } from "./Store/hooks";
import { toDoActions } from "./Store/toDoSlice";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useAppSelector } from "./Store/hooks";

//React functional component
const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const dispatch = useAppDispatch();

  const toDos = useAppSelector((state) => state.toDo.toDos);
  const completedToDos = useAppSelector((state) => state.toDo.completedToDos);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (toDo) {
      dispatch(toDoActions.addToDo(toDo));
      setToDo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = toDos,
      complete = completedToDos;

    if (source.droppableId === "ToDosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "ToDosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    //setCompletedToDos(completed)
    //setTodos(active)
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
