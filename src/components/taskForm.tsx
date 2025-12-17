"use client";

import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { taskSchema } from "@/library/validator";
import { Task } from "@/types/task";
import { TextField, Button, MenuItem } from "@mui/material";

interface TaskFormProps {
  initialData?: Task;
  onSubmit: (data: Omit<Task, "id">) => void;
}

type TaskFormData = z.infer<typeof taskSchema>;

export const TaskForm: React.FC<TaskFormProps> = ({ initialData, onSubmit }) => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      name: "",
      type: "work",
      status: "pending",
    },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        name: initialData.name,
        type: initialData.type,
        status: initialData.status,
      });
    }
  }, [initialData, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Task Name"
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ""}
          />
        )}
      />

      <Controller
        name="type"
        control={control}
        defaultValue="work"
        render={({ field }) => (
          <TextField select label="Task Type" {...field}>
            <MenuItem value="work">Work</MenuItem>
            <MenuItem value="personal">Personal</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>
        )}
      />

      <Controller
        name="status"
        control={control}
        defaultValue="pending"
        render={({ field }) => (
          <TextField select label="Status" {...field}>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="in-progress">In-Progress</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </TextField>
        )}
      />

      <Button type="submit" variant="contained">
        Save Task
      </Button>
    </form>
  );
};
