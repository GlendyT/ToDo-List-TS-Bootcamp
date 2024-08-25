import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { DraftToDo, ToDoTypes } from "./types";

type ToDoState = {
  tasks: ToDoTypes[];
  activeId: ToDoTypes["id"];
  addTask: (data: DraftToDo) => void;
  deleteTask: (id: ToDoTypes["id"]) => void;
  getTaskById: (id: ToDoTypes["id"]) => void;
  updateTask: (data: DraftToDo) => void;
  completeTask: (id: ToDoTypes["id"]) => void;
};

const createTask = (task: DraftToDo): ToDoTypes => {
  return { ...task, id: uuidv4(), isDisabled: false };
};

export const useToDoStore = create<ToDoState>()(
  devtools(
    persist(
      (set) => ({
        tasks: [],
        activeId: "",
        addTask: (data) => {
          const newTask = createTask(data);
          set((state) => ({
            tasks: [...state.tasks, newTask],
          }));
        },
        deleteTask: (id) => {
          set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
          }));
        },
        getTaskById: (id) => {
          set(() => ({
            activeId: id,
          }));
        },
        updateTask: (data) => {
          set((state) => ({
            tasks: state.tasks.map((task) => {
              if (task.id === state.activeId) {
                const { ...updatedData } = data; 
                return { ...task, ...updatedData };
              }
              return task;
            }),
            activeId: "",
          }));
        },
        completeTask: (id) => {
          set((state) => ({
            tasks: state.tasks.map((task) =>
              task.id === id ? { ...task, isDisabled: true } : task
            ),
          }));
        },
      }),
      {
        name: "to-do-storage",
      }
    )
  )
);
