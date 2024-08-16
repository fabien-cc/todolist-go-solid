export type Task = {
  id: number;
  text: string;
  done: boolean;
};

export type TaskCreateDTO = {
  text: string;
};
