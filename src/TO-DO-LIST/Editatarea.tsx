import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { Tarea } from "../interfaces/interfaces";

interface prop {
  tarea: Tarea
}

export const EditaTarea = ({tarea}: prop) => {
  const [actualTarea, setActualTarea] = useState<string>(tarea.name);
  const { dispatch } = useContext(TodoContext);
  const handleChange = (value: string) => {
    setActualTarea(value);
  };
  return (
    <div className="alert alert-dark" role="alert">
      <div className="row">
        <div className="col-xl-8 col-lg-8 col-md-12 mb-1">
          <input
            type="text"
            name="tarea"
            id="tarea"
            className="form-control"
            value={actualTarea}
            onChange={(e) => {
              const value = e.target.value;
              handleChange(value);
            }}
          />
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 ">
              <button
                className="btn btn-primary w-100 mb-1"
                type="button"
                onClick={() => {
                  dispatch({
                    type: "update",
                    payload: {
                      id: tarea.id,
                      name: actualTarea,
                      isUpdate: false,
                      complete: tarea.complete
                    },
                  });
                }}
              >
                Guardar
              </button>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <button
                onClick={() => {
                  dispatch({
                    type: "isUpdate",
                    payload: { id: tarea.id },
                  });
                }}
                className="btn btn-danger w-100"
                type="button"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
