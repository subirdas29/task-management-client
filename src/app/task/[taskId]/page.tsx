
import TaskDetails from "@/components/modules/Task/TaskDetails"
import { getSingleTask } from "@/services/Task"




const MealDetailPage= async({params}:{params:Promise<{taskId:string}>}) => {
    const {taskId} = await params
    const {data:task} = await getSingleTask(taskId)

   
  return (
    <div>
      <TaskDetails task={task}/>
    </div>
  )
}

export default MealDetailPage
