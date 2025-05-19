/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { ITask } from "@/types/task";
import { revalidateTag } from "next/cache";



export const createTask = async (task:ITask) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/task`, {
      method: "POST",
        headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(task),
    });
    revalidateTag("Task");
    console.log(res)
    return await res.json();
  } catch (error: any) {
    console.log(error,"error")
    return Error(error);
  }
};




 export const getAllTasks = async (page?: string,limit?:string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/task/alltasks?limit=${limit}&page=${page}`,
        {
          next: {
            tags: ["Task"],
          },
        }
      );
      const data = await res.json();
      return data;
    } catch (error: any) {
      return Error(error.message);
    }
  };


  export const getSingleTask = async (taskId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/task/taskdetails/${taskId}`,
      {
        next: {
          tags: ["Task"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};

  export const taskStatusUpdate = async (taskId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/task/taskStatus/${taskId}`,
       {
        method: "PATCH",
      
        headers: {
      
          "Content-Type": "application/json",
        },
        
      }
    );
     revalidateTag("Task");
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

  export const taskDelete = async (taskId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/task/${taskId}`,
       {
        method: "DELETE",
      
        headers: {
          "Content-Type": "application/json",
        },
        
      }
    );
     revalidateTag("Task");
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};