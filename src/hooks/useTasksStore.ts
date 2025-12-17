"use client";

import { create } from "zustand";
import { Task } from "@/types/task";

interface TaskState {
  tasks: Task[];
  addTask: (task: Omit<Task, "id">) => void;
  updateTask: (id: string, updated: Omit<Task, "id">) => void;
  removeTask: (id: string) => void;
}

export const useTasksStore = create<TaskState>((set) => ({
  tasks: [],
  addTask: (task) =>
    set((state) => ({ tasks: [...state.tasks, { id: crypto.randomUUID(), ...task }] })),
  updateTask: (id, updated) =>
    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === id ? { ...t, ...updated } : t)),
    })),
  removeTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),
}));
