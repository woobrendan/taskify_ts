import React from 'react';
import './Styles/App.scss';
import InputField from './Components/InputField';

//React functional component
const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
}

export default App;
