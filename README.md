# Task Manager — Lab 3: Lists, Keys, and Conditionals

## About This Project

For this lab, I built a task management application using React, TypeScript, and Vite. The goal was to get more practice working with lists, keys, conditional rendering, and reusable components.

The application displays a list of tasks and allows users to filter them by status or priority, update their progress, and delete tasks they no longer need.

## Features

- Displays tasks with a title, description, due date, status, and priority.
- Filters tasks by status and priority.
- Allows users to update the status of a task.
- Allows users to delete tasks.
- Uses different text colors to identify task priorities and statuses.
- Displays a message when no tasks match the selected filters.
- Includes a responsive layout and hover effects.

## Technologies Used

- React
- TypeScript
- Vite
- CSS
- Git and GitHub

## Getting Started

Clone the repository and open the project folder.

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite to view the application.

To create a production build:

```bash
npm run build
```

## Project Structure

```text
src/
├── components/
│   ├── TaskList/
│   │   └── TaskList.tsx
│   ├── TaskItem/
│   │   ├── TaskItem.tsx
│   │   └── TaskItem.css
│   └── TaskFilter/
│       └── TaskFilter.tsx
├── types/
│   └── index.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## How the Components Work

**App.tsx:** This is where the task data is stored and managed. It handles updating task statuses and deleting tasks.

**TaskList.tsx:** This component takes the task data, filters it based on the selected options, and uses `.map()` to display the tasks.

**TaskItem.tsx:** This component displays the information for each individual task. It also includes the dropdown for changing the task's status and the delete button.

**TaskFilter.tsx:** This component contains the dropdown menus that allow users to filter tasks by status and priority.

## Example Usage

```tsx
<TaskList
  tasks={tasks}
  onStatusChange={handleStatusChange}
  onDelete={handleDelete}
/>
```

## What I Learned

This lab gave me more practice with passing props between components, managing state, and working with arrays in React.

I also got a better understanding of how `.map()` and `.filter()` serve different purposes. One helps display the tasks, while the other determines which tasks should be displayed.

Another takeaway was the importance of connecting components to the main application and testing along the way. Building individual components is one thing, but I need to make sure everything works together instead of waiting until the end to check.

## References

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vite.dev/)

## AI Assistance

I used ChatGPT as a tutor and learning resource to help explain React and TypeScript concepts and clarify areas I needed help understanding. The explanations supported my learning as I worked through the lab.