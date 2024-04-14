import { MostrarTarea } from "./MostrarTarea";
import { EditaTarea } from "./Editatarea";
import { Tarea } from "../interfaces/interfaces";
type prop = {
  tarea: Tarea
}
export const Task = ({tarea}: prop) => {

  return (
    <>
      {tarea.isUpdate === true ? (
        <EditaTarea tarea={tarea} />
      ) : (
        <MostrarTarea tarea={tarea} />
      )}
    </>
  );
};
