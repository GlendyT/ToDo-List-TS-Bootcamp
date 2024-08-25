import { useToDoStore } from "../store";
import { ToDoTypes } from "../types";
import { FirstIcon, FiveIcon, FourIcon, SecondIcon } from "./Buttons";
import ToDoDetailItem from "./ToDoDetailItem";

type ToDoDetailProps = {
  task: ToDoTypes;
};

export default function ToDoDetail({ task }: ToDoDetailProps) {
  const deleteTask = useToDoStore((state) => state.deleteTask);
  const getTaskById = useToDoStore((state) => state.getTaskById);
  const completeTask = useToDoStore((state) => state.completeTask);
  return (
    <div className=" flex flex-row mx-5 px-5 py-2 my-2 gap-4 justify-between backdrop-blur-md bg-black/30 shadow-md rounded-xl max-sm:flex-col italic">
      <div className="flex flex-col w-full">
        <ToDoDetailItem label="Task" data={task.description} />
        <ToDoDetailItem label="Due Date" data={task.date.toString()} />
      </div>

      <div className="flex flex-row lg:flex-row justify-between gap-3 items-center">
        <button
          type="button"
          className="py-2 px-4 bg-stone-900 hover:bg-blue-700 text-white font-bold uppercase rounded-lg disabled:text-stone-900 disabled:hover:backdrop-blur-md disabled:bg-black/30"
          onClick={() => getTaskById(task.id)}
          disabled={task.isDisabled}
          title={!task.isDisabled ? "Edit" : ""}
        >
          <FirstIcon />
        </button>
        <button
          type="button"
          className="py-2 px-4 bg-stone-900 hover:bg-red-700 text-white font-bold uppercase rounded-lg "
          onClick={() => deleteTask(task.id)}
          title="Delete"
        >
          <SecondIcon />
        </button>
        <button
          type="button"
          className="py-2 px-4 bg-stone-900 hover:bg-yellow-500 disabled:bg-green-600  disabled:cursor-not-allowed text-white font-bold uppercase rounded-lg"
          onClick={() => completeTask(task.id)}
          disabled={task.isDisabled}
          title={!task.isDisabled ? "Pending" : "Completed"}
        >
          {task.isDisabled ? <FourIcon /> : <FiveIcon />}
        </button>
      </div>
    </div>
  );
}
