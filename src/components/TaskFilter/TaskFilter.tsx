
import { useState } from "react";

// Import the TypeScript types used by this component.
import type {
    TaskFilterProps,
    TaskStatus,
    TaskPriority,
} from "../../types";

// TaskFilter allows users to filter tasks by status and priority.
export function TaskFilter({ onFilterChange }: TaskFilterProps) {

    // Store the selected status and priority.
    // An empty string means no filter is selected.
    const [status, setStatus] = useState<TaskStatus | "">("");
    const [priority, setPriority] = useState<TaskPriority | "">("");

    // Update the status filter and notify TaskList.
    const handleStatusChange = (value: TaskStatus | "") => {
        setStatus(value);

        onFilterChange({
            status: value || undefined,
            priority: priority || undefined,
        });
    };

    // Update the priority filter and notify TaskList.
    const handlePriorityChange = (value: TaskPriority | "") => {
        setPriority(value);

        onFilterChange({
            status: status || undefined,
            priority: value || undefined,
        });
    };

    return (
        <div className="task-filters">

            {/* Dropdown for filtering tasks by status. */}
            <div>
                <label htmlFor="filter-status">Status</label>
                <select
                    id="filter-status"
                    value={status}
                    onChange={(event) =>
                        handleStatusChange(
                            event.target.value as TaskStatus | ""
                        )
                    }
                >
                    <option value="">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

            {/* Dropdown for filtering tasks by priority. */}
            <div>
                <label htmlFor="filter-priority">Priority</label>
                <select
                    id="filter-priority"
                    value={priority}
                    onChange={(event) =>
                        handlePriorityChange(
                            event.target.value as TaskPriority | ""
                        )
                    }
                >
                    <option value="">All Priorities</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
        </div>
    );
}
