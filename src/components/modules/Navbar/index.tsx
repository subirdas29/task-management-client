import { Button } from "@/components/ui/button"
import Link from "next/link"


const Navbar = () => {
  return (
   <div className="flex justify-center items-center gap-3 my-16">
     <Link href="/">
       <Button >Home</Button> 
     </Link>
      <Link href="create-task">
      <Button >Create Task</Button> 
      </Link>
   </div>
  )
}

export default Navbar
