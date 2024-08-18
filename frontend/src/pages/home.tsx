import { createStore, produce } from "solid-js/store";

import TaskListComponent from "../components/task/task-list";
import { Task, TaskCreateDTO } from "../types/tasks";

export default function Home() {
  const [tasks, setTasks] = createStore<Task[]>([]);
  let input;
  const addTask = (task: TaskCreateDTO) => {
    setTasks(
      produce((items: Task[]) => {
        items.push({
          id: tasks.length + 1,
          text: task.text,
          done: false,
        });
      })
    );
  };

  return (
    <section class="bg-gray-100 text-gray-700 p-8">
      <h1 class="text-2xl font-bold">Todo</h1>
      <div class="flex flex-row gap-1 pt-2">
        <input
          type="text"
          ref={input}
          placeholder="Task description"
          name="task"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              if (!input.value.trim()) return;
              addTask({ text: input.value });
              input.value = "";
            }
          }}
        />
        <button
          onclick={(e) => {
            e.preventDefault();
            if (!input.value.trim()) return;
            addTask({ text: input.value });
            input.value = "";
          }}
        >
          Add Task
        </button>
      </div>
      <div class="pt-2">
        <TaskListComponent tasks={tasks} />
      </div>
    </section>
  );
}
