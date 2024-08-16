import { createStore, produce } from "solid-js/store";

import TaskListComponent from "../components/task/task-list";
import { Task, TaskCreateDTO } from "../types/tasks";

export default function Home() {
  const [tasks, setTasks] = createStore<Task[]>([
    { id: 1, text: "Task 1", done: false },
    { id: 2, text: "Task 2", done: true },
    { id: 3, text: "Task 3", done: false },
  ]);

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
        <input type="text" placeholder="Task" name="name" />
        <button onclick={() => addTask({ text: "dsgdsf" })}>Add Task</button>
      </div>
      <div class="pt-2">
        <TaskListComponent tasks={tasks} />
      </div>
    </section>
  );
}
