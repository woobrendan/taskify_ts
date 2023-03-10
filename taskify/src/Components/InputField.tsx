import { useRef } from 'react'
import '../Styles/styles.scss';

interface Props {
  toDo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ toDo, setToDo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input' onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur()
    }}>
      <input
        ref={inputRef} 
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
