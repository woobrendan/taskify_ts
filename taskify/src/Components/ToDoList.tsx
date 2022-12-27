import React from "react";
import { ToDo } from "../model";
import "../Styles/styles.scss";
import ToDoItem from "./ToDoItem";

interface Props {
  toDos: ToDo[];
}

const ToDoList: React.FC<Props> = ({ toDos }) => {
  return (
    <div className="toDos">
      {toDos.map((toDo) => (
        <ToDoItem key={toDo.id} toDo={toDo} toDos={toDos} />
      ))}
    </div>
  );
};

export default ToDoList;
