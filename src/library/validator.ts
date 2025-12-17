import * as z from "zod";

export const taskSchema = z.object({
    name: z.string().min(1, "Task name cannot be empty"),
    type: z.enum(["work", "personal", "other"]),
    status: z.enum(["pending", "in-progress", "completed"]),
});