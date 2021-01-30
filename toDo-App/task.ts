let fs = require("fs");
export class Task {
  number: number;
  task: string;
  constructor(number: number, task: string) {
    this.number = number;
    this.task = task;
  }
  addTask(): void {
    fs.appendFileSync(
      "tasks.txt",
      "\n" + this.number + " - " + this.task + ".",
      "utf-8"
    );
  }
}
