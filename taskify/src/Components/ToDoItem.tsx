import React from "react";
import { ToDo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "../Styles/styles.scss";

type Props = {
  toDo: ToDo;
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

const ToDoItem: React.FC<Props> = ({ toDo, toDos, setToDos }) => {
  const handleDone = (id: number) => {
    setToDos(
      toDos.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  };

  return (
    <form className="toDos__single">
      <span className="toDos__single--text">{toDo.toDo}</span>
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(toDo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default ToDoItem;
