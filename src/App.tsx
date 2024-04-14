import { TodoApp } from "./TO-DO-LIST/TodoApp"
import { TodoProveder } from "./context/TodoProveder"


export const App = () => {
  return (
    <TodoProveder>
      <TodoApp/>
    </TodoProveder>
  )
}
