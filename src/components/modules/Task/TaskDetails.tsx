import { ITask } from "@/types/task";

const TaskDetails = ({ task }: { task: ITask }) => {
  const { title, description, dueDate, status } = task;

  return (
    <div className="mx-16 md:mx-32 lg:mx-60 mt-10 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Task Details</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Title</h3>
          <p className="text-lg font-semibold text-gray-800">{title}</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500">Description</h3>
          <p className="text-gray-700">{description}</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500">Due Date</h3>
          <p className="text-gray-700">
            {new Date(dueDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500">Status</h3>
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
              status === "Completed"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
