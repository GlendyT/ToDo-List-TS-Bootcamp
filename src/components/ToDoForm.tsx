/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { DraftToDo } from "../types";
import { useToDoStore } from "../store";
import { useEffect } from "react";
import { SixIcon } from "./Buttons";

export default function ToDoForm() {
  const addTask = useToDoStore((state) => state.addTask);
  const activeId = useToDoStore((state) => state.activeId);
  const tasks = useToDoStore((state) => state.tasks);
  const updateTask = useToDoStore((state) => state.updateTask);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<DraftToDo>();

  useEffect(() => {
    if (activeId) {
      const activeTask = tasks.filter((task) => task.id === activeId)[0];
      setValue("description", activeTask.description);
      setValue("date", activeTask.date);
    }
  }, [activeId]);

  const registerToDo = (data: DraftToDo) => {
    if (activeId) {
      updateTask(data);
    } else {
      addTask(data);
    }
    reset();
  };
  return (
    <>
      <form
        className="backdrop-blur-4xl bg-black/10 py-5 px-5 flex flex-row justify-between text-white max-sm:py-2"
        noValidate
        onSubmit={handleSubmit(registerToDo)}
      >
        <div className=" w-full mb-4 max-sm:mb-1 backdrop-blur-md bg-black/40 shadow-md rounded-2xl">
          <div>
            <textarea
              id="description"
              className={`w-full italic px-0 text-sm text-gray-100 border-0 dark:bg-black/60 dark:text-white dark:placeholder-gray-400 pl-2 pt-2 rounded-lg ${
                errors.description ? "outline outline-red-600" : ""
              }`}
              placeholder="Add a Task"
              {...register("description", {
                required: "Description is required",
              })}
            />
          </div>

          <div className="flex items-center justify-between px-3 py-2">
            <input
              id="date"
              className={` justify-center italic items-center p-2 text-black  bg-gray-200  rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ${
                errors.date ? " outline outline-red-600" : ""
              } `}
              type="date"
              {...register("date", {
                required: "Date is required",
              })}
            />

            <button
              type="submit"
              className="bg-stone-900 p-3 text-white uppercase font-bold hover:bg-black cursor-pointer transition-colors"
              value="Guardar Paciente"
              title="Add Task"
            >
              <SixIcon />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
