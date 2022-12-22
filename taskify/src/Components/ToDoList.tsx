import React from 'react'
import { ToDo } from '../model'
import '../Styles/styles.scss'

interface Props {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const ToDoList: React.FC<Props> = ({ toDos, setToDos }) => {
  return (
    <div className='toDos'>
      
    </div>
  )
}

export default ToDoList
