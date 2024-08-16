import { Task } from "../../types/tasks";

interface Props {
  tasks: Task[];
}

const TaskListComponent = ({ tasks }: Props) => {
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
