import React from "react";
import "../Styles/styles.scss";
import ToDoItem from "./ToDoItem";
import { useAppSelector } from "../Store/hooks";
import { ToDo } from "../model";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  completedToDos: ToDo[];
  setCompletedToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<Props> = ({ completedToDos, setCompletedToDos }) => {
  const toDos = useAppSelector((state) => state.toDo.toDos);

  return (
    <div className="container">
      <Droppable droppableId="ToDosList">
        {(provided) => (
          <div
            className="toDos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="toDos__heading">Active Tasks</span>
            {toDos.map((toDo) => (
              <ToDoItem key={toDo.id} toDo={toDo} />
            ))}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="ToDosRemove">
        {(provided) => (
          <div
            className="toDos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="toDos__heading">Completed Tasks</span>
            {toDos.map((toDo) => (
              <ToDoItem key={toDo.id} toDo={toDo} />
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ToDoList;
