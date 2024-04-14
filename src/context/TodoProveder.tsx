import { useReducer } from "react"
import { TodoChildren } from "../interfaces/interfaces"
import { TodoContext } from "./TodoContext"
import { TodoReducer } from "../reducer/reducer"
import { INITIAL_STATE } from "../constaste/INITIAL_STATE"

export const TodoProveder = ({children}: TodoChildren) => {
  const [todoState, dispatch] = useReducer(TodoReducer, INITIAL_STATE)
  return (
    <TodoContext.Provider value={{todoState,dispatch}}>
      {children}
    </TodoContext.Provider>
  )
}
