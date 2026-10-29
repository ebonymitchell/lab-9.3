import { useState } from "react";

// Import the components used to display and filter tasks.
import { TaskItem } from "../TaskItem/TaskItem";
import { TaskFilter } from "../TaskFilter/TaskFilter";

// Import the TypeScript interfaces.
import type { TaskListProps, TaskFilters } from "../../types";

// TaskList receives tasks and callback functions from App.
export function TaskList({
    tasks,
    onStatusChange,
    onDelete,
}: TaskListProps) {

    // Store the currently selected filters.
    const [filters, setFilters] = useState<TaskFilters>({});

    // Create a new array containing only tasks that match the filters.
    const filteredTasks = tasks.filter((task) => {

        // If no status is selected, allow all statuses.
        const matchesStatus =
            !filters.status || task.status === filters.status;

        // If no priority is selected, allow all priorities.
        const matchesPriority =
            !filters.priority || task.priority === filters.priority;

        // A task must match both active filters to appear.
        return matchesStatus && matchesPriority;
    });

    return (
        <section className="task-list">
            <h2>Your Tasks</h2>

            {/* Display the controls for filtering tasks. */}
            <TaskFilter onFilterChange={setFilters} />

            {/* Display a message when no tasks match the filters. */}
            {filteredTasks.length === 0 ? (
                <p className="empty-message">
                    No tasks found. Try changing your filters.
                </p>
            ) : (
                <div className="task-grid">

                    {/* Render a TaskItem for each matching task.
                        Use the unique task ID as the React key. */}
                    {filteredTasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onStatusChange={onStatusChange}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
