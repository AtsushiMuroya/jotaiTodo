import { useAtom } from "jotai"
import { PrimitiveAtom } from "jotai/vanilla"
import { CloseOutlined } from '@ant-design/icons'

type Todo = {
  title: string,
  completed: boolean
}

type RemoveFn = (item: PrimitiveAtom<Todo>) => void;

type TodoItemProps = {
  atom: PrimitiveAtom<Todo>
  remove: RemoveFn
}

export const TodoItem = ({atom,remove}:TodoItemProps) => {
  const [item, setItem] = useAtom(atom);

  const toggleCompleted = () => setItem((todo) => ({ ...todo, completed: !todo.completed}))

  return (
    <>
      <input type="checkbox" checked={item.completed} onChange={toggleCompleted} />

      <span style={{ textDecoration: item.completed ? 'line-through' : '' }}>{item.title}</span>

      <CloseOutlined onClick={() => remove(atom)} />
    </>
  )
}