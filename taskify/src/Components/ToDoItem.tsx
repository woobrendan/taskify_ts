import React from 'react'
import { ToDo } from '../model'

type Props = {
  toDo: ToDo;
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>> 
}

const ToDoItem: React.FC<Props> = ({ toDo, toDos, setToDos }) => {
  return (
    <form className="toDos__single">
      <span className="toDos__single--text"></span>
    </form>
  )
}

export default ToDoItem

