export type TaskStatus = "pending" | "in-progress" | "completed";
export type TaskType = "work" | "personal" | "other";

export interface Task {
    id: string;
    name: string;
    type: TaskType;
    status: TaskStatus;
}