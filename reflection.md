## Reflection Questions

### 1. How did you ensure unique keys for your list items?

I used the task ID as the unique key for each item. When React loops through the tasks using `.map()`, `key={task.id}` helps it keep track of each task, especially when something gets updated or deleted.

### 2. What considerations did you make when implementing the filtering functionality?

I wanted users to be able to filter tasks by status, priority, or both without having to reload the page. I also made sure that when no filters are selected, all tasks are displayed. If nothing matches the selected filters, the application displays a message instead of leaving an empty space.

### 3. How did you handle state updates for task status changes?

I used `useState` to manage the tasks. When someone changes a task's status, the application uses `.map()` to find the task with the matching ID and update its status without changing the other tasks.

### 4. What challenges did you face when implementing conditional rendering?

One challenge was making sure the application displayed the correct information based on each task's status and priority. I used dynamic CSS classes to apply different text colors and conditional rendering to display a message when no tasks matched the selected filters. This helped me better understand how React handles different conditions and updates the interface.


## What I Learned

This lab gave me more practice with passing props between components, managing state, and working with arrays in React.

I also got a better understanding of how `.map()` and `.filter()` serve different purposes. One helps display the tasks, while the other determines which tasks should be displayed.

Another takeaway was the importance of connecting components to the main application and testing along the way. Building individual components is one thing, but I need to make sure everything works together instead of waiting until the end to check.