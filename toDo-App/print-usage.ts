const commandLineUsage = require("command-line-usage");
const readline = require("readline");

import { Console } from "console";
import { listTask } from "./list-task";
import { Task } from "./task";
export const sections = [
  {
    header: "TO-DO app",
    content: "basic todo app in consol",
  },
  {
    header: "Options",
    optionList: [
      {
        name: "list",
        alias: "l",
        description: "Lists all the tasks",
      },
      {
        name: "add",
        alias: "a",
        description: "Adds a new task",
      },
      {
        name: "remove",
        alias: "r",
        description: "Removes a task",
        typeLabel: "number",
      },
      {
        name: "complete",
        alias: "c",
        description: "Completes a task",
      },
    ],
  },
];
const usage = commandLineUsage(sections);
console.log(usage);

if (process.argv.indexOf("--l") != -1) {
  try {
    listTask();
  } catch (e) {
    console.log("nothing to do today");
  }
}
if (process.argv.indexOf("--a" || "add") != -1) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("What do you want to do? ", (answer) => {
    new Task(answer).addTask();
    rl.close();
  });
}
if (process.argv.indexOf("--r" || "remove") != -1) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Which task do you want to remove ", (answer: number) => {
    try {
      if (answer) Task.removeTask(answer);
    } catch (e) {
      console.log("Unable to remove: index is out of bound");
    }
    rl.close();
  });
}
if (process.argv.indexOf("-c" || "complete") != -1) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Which task did you do? ", (answer) => {
    Task.statusCheck(answer);
    rl.close();
  });
}
// if (
//   process.argv.indexOf(
//     "--l" || "--add" || "-a" || "-r" || "--remove" || "-c" || "--complete"
//   ) <= -1
// ) {
//   console.log("WRONG INPUT!\n");
// }

// errorhandling missing
