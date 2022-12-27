import { useState, useRef, useEffect } from "react";
import { ToDo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "../Styles/styles.scss";
import { toDoActions } from "../Store/toDoSlice";
import { useAppDispatch } from "../Store/hooks";

type Props = {
  toDo: ToDo;
  toDos: ToDo[];
  // setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

const ToDoItem: React.FC<Props> = ({ toDo, toDos /*setToDos */ }) => {
  const dispatch = useAppDispatch();
  const [edit, setEdit] = useState<boolean>(false);
  const [editToDo, setEditToDo] = useState<string>(toDo.toDo);

  const handleDone = (id: number) => {
    dispatch(toDoActions.completeToDo(id));
    // setToDos(
    //   toDos.map((task) =>
    //     task.id === id ? { ...task, isDone: !task.isDone } : task,
    //   ),
    // );
  };

  const handleDelete = (id: number) => {
    // setToDos(toDos.filter((toDo) => toDo.id !== id));
    dispatch(toDoActions.removeToDo(id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    // setToDos(
    //   toDos.map((toDo) =>
    //     toDo.id === id ? { ...toDo, toDo: editToDo } : toDo,
    //   ),
    // );
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="toDos__single" onSubmit={(e) => handleEdit(e, toDo.id)}>
      {edit ? (
        <input
          value={editToDo}
          ref={inputRef}
          onChange={(e) => setEditToDo(e.target.value)}
          className="toDos__single--text"
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
