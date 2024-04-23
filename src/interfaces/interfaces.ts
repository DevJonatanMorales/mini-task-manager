export interface Tarea {
  id: number;
  name: string;
  isUpdate: boolean;
  complete: number;
}

export interface TodoState {
  todoCounter: number,
  list_task: Tarea[] | [];
  complete: number,
  pending: number,
}

export interface TodoChildren {
  children: JSX.Element | JSX.Element[];
}
