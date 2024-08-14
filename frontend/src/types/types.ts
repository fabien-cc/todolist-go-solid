export type Task = {
  id: number;
  text: string;
  done: boolean;
};

export type TaskForm = {
  text: string;
};

export type TaskList = {
  tasks: Task[];
};
