export interface Tarea {
  id: number,
  name: string,
  isUpdate: boolean,
  complete: number
}

export interface TodoState{
  list_task: Tarea[] | [],
}

export interface TodoChildren {
  children: JSX.Element | JSX.Element[]
}
