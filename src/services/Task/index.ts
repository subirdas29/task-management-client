/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { ITask } from "@/types/task";
import { revalidateTag } from "next/cache";


export const createOrder = async (task: ITask) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/task`, {
      method: "POST",
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