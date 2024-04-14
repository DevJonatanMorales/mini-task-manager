import { AlterTarea } from "./AlterTarea";
import { ListaTareas } from "./ListaTareas";
import { AgregarTarea } from "./AgregarTarea";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoApp = () => {
  const {todoState} = useContext(TodoContext)
  const {list_task} = todoState
  return (
    <div>
      <AgregarTarea/>
      {Array.isArray(list_task) && list_task.length > 0 ? (
        <ListaTareas/>
      ) : (
        <AlterTarea />
        )}
    </div>
  );
};
