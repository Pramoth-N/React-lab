import { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {

    const [tasks, setTasks] = useState([
        { name: "Complete project setup", completed: true },
        { name: "Design UI components", completed: false },
        { name: "Implement authentication", completed: false },
        { name: "Deploy application", completed: true },
      ]);

  return (
    <div style={{ marginTop: "10px" }}>
      {tasks.map((task, index) => (
        <TaskItem key={index} name={task.name} completed={task.completed} />
      ))}
    </div>
  );
};

export default TaskList;
