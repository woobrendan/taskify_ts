import { useState, useRef, useEffect } from "react";
import { ToDo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "../Styles/styles.scss";
import { toDoActions } from "../Store/toDoSlice";
import { useAppDispatch } from "../Store/hooks";

type Props = {
  toDo: ToDo;
  fromComponent?: string;
  index: number;
};

const ToDoItem: React.FC<Props> = ({ toDo, fromComponent, index }) => {
  const dispatch = useAppDispatch();
  const [edit, setEdit] = useState<boolean>(false);
  const [editToDo, setEditToDo] = useState<string>(toDo.toDo);

  const handleDone = (id: number) => {
    fromComponent === "remove"
      ? dispatch(toDoActions.undoCompleteToDo(id))
      : dispatch(toDoActions.completeToDo(id));
  };

  const handleDelete = (id: number) => {
    dispatch(toDoActions.removeToDo(id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setEdit(false);
    dispatch(toDoActions.editToDo({ id, value: editToDo }));
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
