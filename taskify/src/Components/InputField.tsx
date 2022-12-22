import React from 'react'
import '../Styles/styles.scss';

interface Props {
  toDo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ toDo, setToDo }: Props) => {
  return (
    <form className='input'>
      <input type='input' placeholder="Enter a task" className='input__box' />
      <button className="input__submit" type="submit">Go</button>
    </form>
  )
}

export default InputField
