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
        name: "l",
        description: "Lists all the tasks",
      },
      {
        name: "a",
        description: "Adds a new task",
      },
      {
        name: "r",
        description: "Removes an task",
        typeLabel: "number",
      },
      {
        name: "c",
        description: "Completes an task",
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
if (process.argv.indexOf("--a") != -1) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("What do you want to do? ", (answer) => {
    new Task(answer).addTask();
    rl.close();
  });
}
if (process.argv.indexOf("--r") != -1) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Which task do you want to remove ", (answer) => {
    Task.removeTask(answer);
    rl.close();
  });
}
if (process.argv.indexOf("--c") != -1) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Which task did you do? ", (answer) => {
    Task.statusCheck(answer);
    rl.close();
  });
}

///need to put task in array
// errorhandling missing
