import React, { useState } from 'react';
import './Styles/App.scss';
import InputField from './Components/InputField';
import { ToDo } from './model';

//React functional component
const App: React.FC = () => {

  const [toDo, setToDo] = useState<string>('')
  const [toDoList, setToDoList] = useState<ToDo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (toDo) {
      setToDoList([...toDoList, {id: Date.now(), toDo, isDone: false}])
      setToDo('')
    }
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
