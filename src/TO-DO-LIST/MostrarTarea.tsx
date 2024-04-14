import { useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";
import { Tarea } from "../interfaces/interfaces";

type MostrarTareaProps = {
  tarea: Tarea;
};

export const MostrarTarea = ({ tarea }: MostrarTareaProps) => {
  const { dispatch } = useContext(TodoContext);

  useEffect(() => {
    const tareaElement = document.getElementById(`${tarea.id}`);

    if (tareaElement instanceof HTMLInputElement) {
      tareaElement.checked = tarea.complete === 1 ? true : false;
    }
  }, [tarea]);

  return (
    <div className="alert alert-dark" role="alert">
      <div className="d-flex justify-content-between">
        <div className="row">
          <label className="my-auto" htmlFor="flexCheckDefault">
            <input
              className="form-check-input"
              type="checkbox"
              value={tarea.complete}
              id={`${tarea.id}`}
              onClick={() => {
                dispatch({
                  type: "isComplete",
                  payload: {
                    id: tarea.id,
                    complete: tarea.complete === 0 ? 1 : 0,
                  },
                });
              }}
            />
            <strong
              className={
                tarea.complete
                  ? "mx-2 text-uppercase text-decoration-line-through"
                  : "mx-2 text-uppercase"
              }
            >
              {tarea.name}
            </strong>
          </label>
        </div>
        <div>
          <button
            className="btn btn-primary mx-1"
            type="button"
            onClick={() => {
              dispatch({
                type: "isUpdate",
                payload: { id: tarea.id },
              });
            }}
          >
            Editar
          </button>
          <button
            onClick={() => {
              dispatch({
                type: "delete",
                payload: { id: tarea.id },
              });
            }}
            className="btn btn-danger my-0"
            type="button"
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};
