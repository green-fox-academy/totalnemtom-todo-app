let fs = require("fs");
export class Task {
  number: number;
  task: string;
  status: string;
  constructor(number: number, task: string) {
    this.number = number;
    this.task = task;
    this.status = "[ ]";
  }
  statusCheck(number?: number) {
    this.status = "[X]";
    let readFIle = fs.readFileSync("tasks.txt", "utf-8");
    let splitFile = readFIle.split("\n");
    splitFile[number] =
      "\n" + this.status + +this.number + " - " + this.task + ".";
    let joinFile = splitFile.join("\n");
    fs.writeFileSync("tasks.txt", joinFile);
  }
  addTask(): void {
    fs.appendFileSync(
      "tasks.txt",
      "\n" + this.status + +this.number + " - " + this.task + ".",
      "utf-8"
    );
  }
  removeTask(number: number): void {
    let readFIle = fs.readFileSync("tasks.txt", "utf-8");
    let splitFile = readFIle.split("\n");
    let spliceFile = splitFile.splice(number, 1);
    let joinFile = splitFile.join("\n");
    fs.writeFileSync("tasks.txt", joinFile);
  }
}
