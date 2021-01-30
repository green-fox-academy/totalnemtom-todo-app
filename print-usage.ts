const commandLineUsage = require("command-line-usage");

const sections = [
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
