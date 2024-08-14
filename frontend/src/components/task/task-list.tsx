import { TaskList } from "../../types/types";

const TaskListComponent = ({ tasks }: TaskList) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li>
          {task.text} {task.done ? "✅" : "❌"}
        </li>
      ))}
    </ul>
  );
};

export default TaskListComponent;
