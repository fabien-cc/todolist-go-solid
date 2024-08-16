import { For } from "solid-js";
import { Task } from "../../types/tasks";

interface Props {
  tasks: Task[];
}

const TaskListComponent = ({ tasks }: Props) => {
  return (
    <div>
      <ul>
        <For each={tasks}>
          {(task) => (
            <li>
              {task.text} {task.done ? "✅" : "❌"}
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default TaskListComponent;
