import { createContext } from "react";
import { Tarea, TodoState } from "../interfaces/interfaces";
type TodoAtion =
  | { type: "add"; payload: Tarea }
  | { type: "update"; payload: Tarea }
  | { type: "delete"; payload: { id: number } }
  | { type: "isUpdate"; payload: { id: number } }
  | { type: "isComplete"; payload: { id: number; complete: number } };

export type Props = {
  todoState: TodoState;
  dispatch: ({ type, payload }: TodoAtion) => void;
};
export const TodoContext = createContext<Props>({} as Props);
