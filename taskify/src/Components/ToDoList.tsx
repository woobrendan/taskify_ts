import React from "react";
import "../Styles/styles.scss";
import ToDoItem from "./ToDoItem";
import { useAppSelector } from "../Store/hooks";

const ToDoList: React.FC = () => {
  const toDos = useAppSelector((state) => state.toDo.toDos);

  return (
    // <div className="toDos">
    //   {toDos.map((toDo) => (
    //     <ToDoItem key={toDo.id} toDo={toDo} />
    //   ))}
    // </div>
    <div className="container">
      <div className="toDos">
        <span className="toDos__heading">Active Tasks</span>
        {toDos.map((toDo) => (
          <ToDoItem key={toDo.id} toDo={toDo} />
        ))}
      </div>
      <div className="toDos remove">
        <span className="toDos__heading">Completed Tasks</span>
        {toDos.map((toDo) => (
          <ToDoItem key={toDo.id} toDo={toDo} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
