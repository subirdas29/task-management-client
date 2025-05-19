"use client";

import { TMTable } from "@/components/ui/core/TMTable";
import TablePagination from "@/components/ui/core/TMTable/TablePagination";
import { IMeta } from "@/types/meta";
import { ITask } from "@/types/task";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, 
  // Trash, 
  Eye } from "lucide-react";


// import DeleteConfirmationModal from "@/components/ui/core/NBModal/DeleteConfirmationModal";
import { useRouter } from "next/navigation";

const AllTasks = ({tasks, meta}:{tasks:ITask,meta:IMeta}) => {

    console.log(tasks,'task')
  const router = useRouter();

  // const {isModalOpen,
  //   selectedItem,
  //   setModalOpen,
  //   handleDelete,handleDeleteConfirm} = useOrderDelete()



  const columns: ColumnDef<ITask>[] = [
 
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => 
      <span>{row.original.title}</span>,
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => 
      <span>{row.original.description}</span>,
    },
    // {
    //      accessorKey: "dueDate",
    //      header: "Due Date",
    //      cell: ({ row }) => (
    //        <span>
    //          {row.original.deliveryDate
    //            ? dayjs(row.original.deliveryDate).format("DD-MM-YYYY")
    //            : "N/A"}
    //        </span>
    //      ),
    //    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        // Get the status value from the row
        const status = row.original.status ?? "unknown";

        return (
          <span className={`font-bold `}>
            {status}
          </span>
        );
      },
    },
    

    
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => (
        
        <div className="flex space-x-3 ">
          {/* <button className="text-green-500 cursor-pointer" title="View Details"
          onClick={() =>
            router.push(
              `/orderdetails/${row.original.orderId}/meal/${row.original._id}`)
          }
          >
            <Eye className="w-5 h-5" />
          </button> */}

          <button
            className="text-blue-500 cursor-pointer"
            title="Edit"
            // onClick={() =>
            //   router.push(
            //     `/orderdetails/${row.original.orderId}/meal/${row.original._id}`)
            // }
          >
            <Edit className="w-5 h-5" />
          </button>

         {/* <button
  className={`text-red-500 cursor-pointer ${
    row.original.status === "Delivered" ? "opacity-50 cursor-not-allowed" : ""
  }`}
  title="Delete"
  onClick={() => handleDelete(row.original)}
  disabled={row.original.status === "Cancelled"}
>
  <Trash className="w-5 h-5" />
</button> */}

        </div>
      ),
    },
  ];

  return (
    <div className="mx-8 md:mx-12 lg:mx-20 my-20">
      <h1 className="text-3xl font-bold mb-4 text-center">All Tasks</h1>
      <div className="overflow-x-auto">
      <TMTable columns={columns} data={Array.isArray(tasks) ? tasks : []} />
      <TablePagination totalPage={meta?.totalPage}/>
      </div>
      {/* <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      /> */}
    </div>
  );
};

export default AllTasks;
