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

let milk = new Task(2, "Buy milk");

if (process.argv.indexOf("--l") != -1) {
  listTask();
}
if (process.argv.indexOf("--a") != -1) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(
    "What do you want to do? Please add one number and the task",
    (answer) => {
      // answer in number, string
      let splitAnswer = answer.split(",");
      let answer1 = splitAnswer[0];
      let answer2 = splitAnswer[1];
      new Task(answer1, answer2).addTask();
      rl.close();
    }
  );
}
if (process.argv.indexOf("--r") != -1) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Which task do you want to remove ", (answer) => {
    milk.removeTask(answer);
    rl.close();
  });
}
if (process.argv.indexOf("--c") != -1) {
  milk.statusCheck();
}
