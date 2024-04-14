import { useContext } from "react";
import { Task } from "./Tarea";
import { TodoContext } from "../context/TodoContext";

export const ListaTareas = () => {
  const {todoState} = useContext(TodoContext)
  const {list_task} = todoState

  return (
    <div>
      {list_task.map((task, index) => (
        <Task
          key={index}
          tarea={task}
        />
      ))}
    </div>
  );
};
