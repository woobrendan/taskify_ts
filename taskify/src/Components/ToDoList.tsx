import React from "react";
import { ToDo } from "../model";
import "../Styles/styles.scss";
import ToDoItem from "./ToDoItem";

interface Props {
  toDos: ToDo[];
  // setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const ToDoList: React.FC<Props> = ({ toDos /*setToDos*/ }) => {
  return (
    <div className="toDos">
      {toDos.map((toDo) => (
        <ToDoItem
          key={toDo.id}
          toDo={toDo}
          toDos={toDos}
          // setToDos={setToDos}
        />
      ))}
    </div>
  );
};

export default ToDoList;
