import AllTasks from "@/components/modules/Task/AllTasks"
import { getAllTasks } from "@/services/Task"

const HomePage = async({searchParams}:{searchParams:Promise<{page:string}>}) => {
      const {page} = await searchParams
    const {data,meta} = await getAllTasks(page,'5')
  return (
    <div>
        <AllTasks tasks={data} meta={meta}/>
    </div>
  )
}

export default HomePage
