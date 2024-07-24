import { useAtom } from "jotai"
import { todosAtom } from "../atom/atom"
import { FormEvent } from "react"

const TodoList = () => {
  const [, setTodos] = useAtom(todosAtom)

  const remove: any = (todo) => setTodos((prev) => prev.filter((item) => item !== todo))

  const add = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
}