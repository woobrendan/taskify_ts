import React, { useState } from 'react';
import './Styles/App.scss';
import InputField from './Components/InputField';
import { ToDo } from './model';
import ToDoList from './Components/ToDoList';

//React functional component
const App: React.FC = () => {

  const [toDo, setToDo] = useState<string>('')
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (toDo) {
      setToDos([...toDos, {id: Date.now(), toDo, isDone: false}])
      setToDo('')
    }
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd}/>
      <ToDoList toDos={toDos} setToDos={setToDos}/>
    </div>
  );
}

export default App;
