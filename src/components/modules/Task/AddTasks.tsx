/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, SubmitHandler } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { ITask } from "@/types/task";
import { createTask } from "@/services/Task";

import { CalendarDays } from "lucide-react";

export default function CreateTask() {
  const router = useRouter();

  const form = useForm<ITask>();

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<ITask> = async (data) => {
    console.log(data, "check");

    try {
      const taskData = {
        ...data,
        dueDate: new Date(data.dueDate).toISOString(),
      };
      const res = await createTask(taskData);
      console.log(res);

      if (res.success) {
        toast.success(res.message);
        router.push("/");
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
      toast.error("An error occurred while adding the task.");
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl p-5 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-5">Add New Task</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="my-5">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="resize-none h-36" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 text-primary/80">
                  <CalendarDays className="w-5 h-5" />
                  Select Due Date
                </FormLabel>
                <FormControl>
                  <DatePicker
                    selected={field.value ? new Date(field.value) : null}
                    onChange={(date) => field.onChange(date)}
                    minDate={new Date()}
                    className="rounded-lg border shadow-sm p-2"
                    placeholderText="Pick a date"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-5 w-full" disabled={isSubmitting}>
            {isSubmitting ? "Adding Task....." : "Add Task"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
