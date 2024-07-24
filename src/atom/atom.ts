import { atom } from "jotai";
import { PrimitiveAtom } from "jotai/vanilla";

type Todo = {
  title: string,
  completed: boolean
}

export const filterAtom = atom('all')

export const todosAtom = atom<PrimitiveAtom<Todo>[]>([]);

export const filteredAtom = atom<PrimitiveAtom<Todo>[]>((get) => {
  const filter = get(filterAtom);

  const todos = get(todosAtom);

  if (filter === 'all') return todos;
  if (filter === 'completed') return todos.filter((atom) => get(atom).completed);

  return todos.filter((atom) => !get(atom).completed)

})