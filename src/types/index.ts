export type ToDoTypes = {
  id: string;
  description: string;
  date: Date;
  isDisabled: boolean;
};

export type DraftToDo = Omit<ToDoTypes, "id" & "isDisabled">;
