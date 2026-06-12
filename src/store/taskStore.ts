import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Task } from "../types/task";

interface TaskState {
  tasks: Task[];

  addTask: (
    title: string,
    priority: Task["priority"]
  ) => void;

  toggleTask: (id: number) => void;

  deleteTask: (id: number) => void;

  editTask: (
    id: number,
    title: string,
    priority?: Task["priority"]
  ) => void;

  clearTasks: () => void;
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],

      addTask: (title, priority) =>
        set((state) => ({
          tasks: [
            {
              id: Date.now(),
              title,
              priority,
              completed: false,
            },
            ...state.tasks,
          ],
        })),

      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? {
                  ...task,
                  completed: !task.completed,
                }
              : task
          ),
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter(
            (task) => task.id !== id
          ),
        })),

      editTask: (
        id,
        title,
        priority
      ) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? {
                  ...task,
                  title,
                  priority:
                    priority ?? task.priority,
                }
              : task
          ),
        })),

      clearTasks: () =>
        set({
          tasks: [],
        }),
    }),
    {
      name: "smart-study-tracker",
    }
  )
);