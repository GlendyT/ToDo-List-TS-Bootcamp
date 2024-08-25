import { useToDoStore } from "../store";
import ToDoDetail from "./ToDoDetail";

export default function ToDoList() {
  const tasks = useToDoStore((state) => state.tasks);

  return (
    <div>
      {tasks.length ? (
        <>
          <h2 className="font-black text-3xl text-center text-gray-200 italic ">Tasks List</h2>

          {tasks.map((task) => (
            <ToDoDetail key={task.id} task={task} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-gray-200 text-3xl text-center italic">
            ToDo List
          </h2>
          <p className="text-xl text-gray-300 mt-5 mb-10 text-center italic">
            Start adding you Tasks
          </p>
        </>
      )}
    </div>
  );
}
