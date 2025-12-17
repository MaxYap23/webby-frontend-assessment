"use client";

import React, { use, useState } from "react";
import { TaskForm } from "@/components/taskForm";
import { useTasksStore } from "@/hooks/useTasksStore";
import { Card, CardContent, CardActions, Typography, Button, Grid } from "@mui/material";
import { Task } from "@/types/task";

export default function TasksPage() {
  const {tasks, addTask, updateTask, removeTask} = useTasksStore();
  const [editingID, setEditingID] = useState<string | null>(null);

  const handleSubmit = (data: Omit<Task, "id">) => {
    if (editingID) {
      updateTask(editingID, data);
      setEditingID(null);
    } else {
      addTask(data);
    }
  };

  const taskToEdit = tasks.find((t) => t.id === editingID);

  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        {editingID ? "Edit Task" : "Task Tracker"}
      </Typography>

      <Card style={{ marginBottom: '2rem', padding: "1rem" }}>
        <TaskForm key={editingID ?? "create"} initialData={taskToEdit} onSubmit={handleSubmit}/>

        {editingID && (
          <Button variant="outlined" color="secondary" onClick={() => setEditingID(null)} style={{ marginTop: '1rem' }}>
            Cancel Edit
          </Button>
        )}
      </Card>

      <Grid container spacing={2}>
        {tasks.map((task) => (
          <Grid key = {task.id} style = {{ width: '100%', maxWidth: 400 }}>
            <Card>
              <CardContent>
                <Typography variant="h6">{task.name}</Typography>
                <Typography color="textSecondary">Type: {task.type}</Typography>
                <Typography color="textSecondary">Status: {task.status}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => setEditingID(task.id)}>Edit</Button>
                <Button size="small" color="error" onClick={() => removeTask(task.id)}>Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}