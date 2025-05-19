/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { TMTable } from "@/components/ui/core/TMTable";
import TablePagination from "@/components/ui/core/TMTable/TablePagination";
import { IMeta } from "@/types/meta";
import { ITask } from "@/types/task";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Trash } from "lucide-react";
import dayjs from "dayjs";

import { useRouter } from "next/navigation";

import { taskDelete, taskStatusUpdate } from "@/services/Task";
import { toast } from "sonner";

const AllTasks = ({ tasks, meta }: { tasks: ITask; meta: IMeta }) => {
  const router = useRouter();

  const handleStatusUpdate = async (taskId: string) => {
    try {
      const res = await taskStatusUpdate(taskId);
      if (res.success) {
        toast.success(res.message);
        console.log(res);
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
      toast.error("An error occurred while updating the task.");
    }
  };

  const handleDelete = async (taskId: string) => {
    try {
      const res = await taskDelete(taskId);
      console.log(res);

      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
      toast.error("An error occurred while deleting the task.");
    }
  };

  const columns: ColumnDef<ITask>[] = [
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => <span>{row.original.title}</span>,
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => <span>{row.original.description}</span>,
    },
    {
      accessorKey: "dueDate",
      header: "Due Date",
      cell: ({ row }) => (
        <span>
          {row.original.dueDate
            ? dayjs(row.original.dueDate).format("DD-MM-YYYY")
            : "N/A"}
        </span>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.original.status ?? "unknown";
        const isCompleted = status === "Completed";

        return (
          <button
            onClick={() => {
              if (row.original._id) {
                handleStatusUpdate(row.original._id);
              }
            }}
            className={`inline-block shadow-3xl border-2 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200
          ${
            isCompleted
              ? "bg-green-100 text-green-700 hover:bg-green-200 hover:text-green-900 cursor-pointer opacity-70"
              : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200 hover:text-yellow-900 cursor-pointer"
          }
        `}
          >
            {status}
          </button>
        );
      },
    },

    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex space-x-3 ">
          <button
            className="text-green-500 cursor-pointer"
            title="View Details"
            onClick={() => router.push(`/task/${row.original._id}`)}
          >
            <Eye className="w-5 h-5" />
          </button>

          <button
            className={`text-red-500 cursor-pointer`}
            title="Delete"
            onClick={() => {
              if (row.original._id) {
                handleDelete(row.original._id);
              }
            }}
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="mx-8 md:mx-12 lg:mx-20 my-12">
      <h1 className="text-3xl font-bold mb-4 text-center">All Tasks</h1>
      <div className="overflow-x-auto">
        <TMTable columns={columns} data={Array.isArray(tasks) ? tasks : []} />
        <TablePagination totalPage={meta?.totalPage} />
      </div>
    </div>
  );
};

export default AllTasks;
