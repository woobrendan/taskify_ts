import React from 'react'
import '../Styles/styles.scss';

interface Props {
  toDo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ toDo, setToDo }) => {
  return (
    <form className='input'>
      <input 
        type='input' 
        placeholder="Enter a task" 
        className='input__box' 
        value={toDo}
        onChange={e => setToDo(e.target.value)}
      />
      <button className="input__submit" type="submit">Go</button>
    </form>
  )
}

export default InputField
