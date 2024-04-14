import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export const AgregarTarea = () => {
  const [nuevaTarea, setNuevaTarea] = useState<string>('')
const {todoState, dispatch} = useContext(TodoContext)
  return (
    <div>
      <h2 className="px-auto bg-info py-2 my-4 text-center rounded">MINI ADMINISTRADOR DE TERAS</h2>
      <div className="col-12 mb-4 mx-auto">
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              className="mx-0 form-control"
              placeholder="Nueva tarea"
              name="nuevaTarea"
              id="nuevaTarea"
              value={nuevaTarea}
              onChange={(e) => {
                const { value } = e.target;
                setNuevaTarea(value);
              }}
            />
          </div>
          <div className="col-3">
            <button
              onClick={()=> {
                dispatch({
                  type: 'add',
                  payload: {
                    id: todoState.list_task.length +1,
                    name: nuevaTarea,
                    isUpdate: false,
                    complete: 0
                  }
                })
                setNuevaTarea('')
              }}
              className="btn btn-success mx-0 w-100"
              type="button"
            >
              AGREGAR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
