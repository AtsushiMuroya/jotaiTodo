import { Radio } from "antd"
import { useAtom } from "jotai"
import { filterAtom } from "../atom/atom"

export const Filter = () => {
  const [filter, setFilter] = useAtom(filterAtom)

  return (
    <Radio.Group onChange={(e) => setFilter(e.target.value as string)} value={filter}>
      <Radio value="all">All</Radio>
      <Radio value="completed">Completed</Radio>
      <Radio value="incompleted">Incompleted</Radio>
    </Radio.Group>
  )
}