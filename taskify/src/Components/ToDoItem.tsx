import React from 'react'
import { ToDo } from '../model'

interface Props {
  toDo: ToDo;
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>> 
}

const ToDoItem: React.FC<Props> = ({ toDo }) => {
  return (
    <div>
      
    </div>
  )
}

export default ToDoItem

