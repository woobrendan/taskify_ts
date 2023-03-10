import React from "react";
import "../Styles/styles.scss";
import ToDoItem from "./ToDoItem";
import { useAppSelector } from "../Store/hooks";
import { Droppable } from "react-beautiful-dnd";

const ToDoList: React.FC = () => {
  const toDos = useAppSelector((state) => state.toDo.toDos);
  const completedToDos = useAppSelector((state) => state.toDo.completedToDos);

  return (
    <div className="container">
      <Droppable droppableId="ToDosList">
        {(provided, snapshot) => (
          <div
            className={`toDos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="toDos__heading">Active Tasks</span>
            {toDos.map((toDo, index) => (
              <ToDoItem key={toDo.id} toDo={toDo} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="ToDosRemove">
        {(provided, snapshot) => (
          <div
            className={`toDos remove ${
              snapshot.isDraggingOver ? "dragcomplete" : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="toDos__heading">Completed Tasks</span>
            {completedToDos.map((toDo, index) => (
              <ToDoItem
                key={toDo.id}
                toDo={toDo}
                fromComponent="remove"
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ToDoList;
