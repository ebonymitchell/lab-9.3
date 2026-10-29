// Defines the three statuses a task can have.
export type TaskStatus = "pending" | "in-progress" | "completed";

// Defines the allowed priority levels.
export type TaskPriority = "low" | "medium" | "high";

// Describes the structure of a single task.
export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate: string;
}

// Defines the data and functions TaskList receives.
export interface TaskListProps {
    tasks: Task[];
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void;
}

// Defines the data and functions TaskItem receives.
export interface TaskItemProps {
    task: Task;
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void;
}

// Defines the selected filters for task status and priority.
// The question marks mean these properties are optional.
export interface TaskFilters {
    status?: TaskStatus;
    priority?: TaskPriority;
}

// Defines the callback function TaskFilter receives.
// Reuses TaskFilters instead of repeating the same properties.
export interface TaskFilterProps {
    onFilterChange: (filters: TaskFilters) => void;
}
