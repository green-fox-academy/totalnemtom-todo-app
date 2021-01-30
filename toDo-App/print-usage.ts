const commandLineUsage = require("command-line-usage");

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
let dog = new Task(1, "Walk the dog");
let milk = new Task(2, "Buy milk");
let homework = new Task(3, "Do homework");
if (process.argv.indexOf("--l") != -1) {
  listTask();
}
if (process.argv.indexOf("--a") != -1) {
  dog.addTask();
  milk.addTask();
  homework.addTask();
}
