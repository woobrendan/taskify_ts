import { useState } from "react";
import { ToDo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "../Styles/styles.scss";

type Props = {
  toDo: ToDo;
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

const ToDoItem: React.FC<Props> = ({ toDo, toDos, setToDos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editToDo, setEditToDo] = useState<string>(toDo.toDo);

  const handleDone = (id: number) => {
    setToDos(
      toDos.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  return (
    <form className="toDos__single">
      {edit ? (
        <input
          value={editToDo}
          onChange={(e) => setEditToDo(e.target.value)}
          className="toDos__single--test"
        />
      ) : toDo.isDone ? (
        <s className="toDos__single--text">{toDo.toDo}</s>
      ) : (
        <span className="toDos__single--text">{toDo.toDo}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !toDo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(toDo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(toDo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default ToDoItem;
