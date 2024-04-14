import { Tarea, TodoState } from "../interfaces/interfaces";

type TodoAtion =
  | { type: "add"; payload: Tarea }
  | { type: "update"; payload: Tarea }
  | { type: "delete"; payload: { id: number } }
  | { type: "isUpdate"; payload: { id: number } }
  | { type: "isComplete"; payload: { id: number; complete: number } };

export const TodoReducer = (state: TodoState, action: TodoAtion) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        list_task: [...state.list_task, action.payload],
      };
    case "update":
      return {
        ...state,
        list_task: state.list_task.map(({ ...task }) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }

          return task;
        }),
      };
    case "isUpdate":      
      return {
        ...state,
        list_task: state.list_task.map(({ ...task }) => {
          if (task.id === action.payload.id) {
            return { ...task, isUpdate: !task.isUpdate };
          }
          return task;
        }),
      };
    case "isComplete":
      return {
        ...state,
        list_task: state.list_task.map(({ ...task }) => {
          if (task.id === action.payload.id) {
            return { ...task, complete: action.payload.complete };
          }
          return task;
        }),
      };
    case "delete":
      return {
        ...state,
        list_task: state.list_task.filter(
          (task) => task.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
