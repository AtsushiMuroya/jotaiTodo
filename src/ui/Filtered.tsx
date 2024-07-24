import { a, useTransition } from "react-spring"
import { TodoItem } from "./TodoItem"
import { useAtom } from "jotai"
import { filteredAtom } from "../atom/atom"


const Filtered = (props: any) => {
  const [todos] = useAtom(filteredAtom)

  const transitions = useTransition(todos, {
    keys: (todo) => todo.toString(),
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 40 },
    leave:{opacity:0,height:0},
  })
  return transitions((style, atom) => (
    <a.div className="item" style={style}>
      <TodoItem atom={atom} {...props} />
    </a.div>
  ))

}