
// Import the stylesheet for the TaskItem component.
import "./TaskItem.css";

// Import the TypeScript types used by this component.
import type { TaskItemProps, TaskStatus } from "../../types";

// TaskItem displays one task and receives its data
// and callback functions from the parent component.
export function TaskItem({
    task,
    onStatusChange,
    onDelete,
}: TaskItemProps) {
    return (
        // Main container for an individual task.
        <div className="task-item">

            {/* Display the task title and description. */}
            <h3>{task.title}</h3>
            <p className="task-description">{task.description}</p>

            {/* Display the task's priority using a dynamic CSS class.
                The text color changes based on the priority value. */}
            <p>
                Priority:{" "}
                <span className={`priority-${task.priority}`}>
                    {task.priority}
                </span>
            </p>

            {/* Display the task's status using a dynamic CSS class.
                The text color changes based on the status value. */}
            <p>
                Status:{" "}
                <span className={`status-${task.status}`}>
                    {task.status}
                </span>
            </p>

            {/* Display the task's due date. */}
            <p>Due Date: {task.dueDate}</p>

            {/* Connect the label to this task's unique status selector. */}
            <label htmlFor={`status-${task.id}`}>
                Change Status:
            </label>

            {/* Allow the user to change the task's status.
                Notify the parent component when a new status is selected. */}
            <select
                id={`status-${task.id}`}
                value={task.status}
                onChange={(event) =>
                    onStatusChange(
                        task.id,
                        event.target.value as TaskStatus
                    )
                }
            >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>

            {/* Call the parent's delete function with this task's unique ID.
                The CSS class provides the button's styling. */}
            <button
                type="button"
                className="delete-button"
                onClick={() => onDelete(task.id)}
            >
                Delete Task
            </button>
        </div>
    );
}
