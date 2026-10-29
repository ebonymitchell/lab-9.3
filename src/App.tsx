import { useState } from "react";

// Import the TaskList component.
import { TaskList } from "./components/TaskList/TaskList";

// Import TypeScript types.
import type { Task, TaskStatus } from "./types";

// Create sample tasks for the application.
const initialTasks: Task[] = [
  {
    id: "1",
    title: "Complete React Lab 3",
    description: "Build the task management application.",
    status: "in-progress",
    priority: "high",
    dueDate: "2026-10-29",
  },
  {
    id: "2",
    title: "Review TypeScript",
    description: "Practice interfaces and union types.",
    status: "pending",
    priority: "medium",
    dueDate: "2026-10-30",
  },
  {
    id: "3",
    title: "Practice Git",
    description: "Commit and push project changes.",
    status: "completed",
    priority: "low",
    dueDate: "2026-10-28",
  },
];

function App() {
  // Store the tasks in React state.
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  // Update the status of a task using its unique ID.
  const handleStatusChange = (
    taskId: string,
    newStatus: TaskStatus
  ) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: newStatus }
          : task
      )
    );
  };

  // Delete a task by filtering out its ID.
  const handleDelete = (taskId: string) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId)
    );
  };

  return (
    <main className="app-container">
      <header className="app-header">
        <h1>Task Manager</h1>
        <p>Organize your tasks and track your progress.</p>
      </header>

      {/* Pass task data and handlers to TaskList. */}
      <TaskList
        tasks={tasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </main>
  );
}

export default App;
