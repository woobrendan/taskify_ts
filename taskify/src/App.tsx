import { useState } from 'react';
import './Styles/App.scss';
import InputField from './Components/InputField';

//React functional component
const App: React.FC = () => {

  const [toDo, setToDo] = useState<string>('')

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo}/>
    </div>
  );
}

export default App;
