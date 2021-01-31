import { type } from "os";

let fs = require("fs");
export class Task {
  number: number;
  task: string;
  static status: string;
  constructor(task: string) {
    this.task = task;
    Task.status = "[ ]";
  }
  static statusCheck(number: number) {
    let readFIle = fs.readFileSync("tasks.txt", "utf-8");
    let splitFile: string[] = readFIle.split("\n");
    for (let i = 0; i <= number; i++) {
      if ((i = number)) {
        let splitRow: string[] = splitFile[i].split("-");
        splitRow[0] = "[X] ";
        let joinRow = splitRow.join("-");
        splitFile.splice(number, 1, joinRow);
        let correctArr = splitFile.join("\n").toString();
        fs.writeFileSync("tasks.txt", correctArr);
      }
    }
  }
  addTask(): void {
    fs.appendFileSync(
      "tasks.txt",
      Task.status + " - " + this.task + ".\n",
      "utf-8"
    );
  }
  static removeTask(number: number): void {
    let readFIle = fs.readFileSync("tasks.txt", "utf-8");
    let splitFile: string[] = readFIle.split("\n");
    let lines = splitFile.length;
    if (lines < number) {
      throw console.error("Unable to remove: index is out of bound");
    }
    splitFile.splice(number - 1, 1);
    let joinFile = splitFile.join("\n");
    fs.writeFileSync("tasks.txt", joinFile);
  }
  // static getLineNumber(): number {
  //   let readFIle = fs.readFileSync("tasks.txt", "utf-8");
  //   return readFIle.lenght;
  // }
}
