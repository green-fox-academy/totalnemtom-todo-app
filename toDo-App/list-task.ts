import { sections } from "./print-usage";
export function listTask(): void {
  let fs = require("fs");
  let fileContent = fs.readFileSync(`./tasks.txt`, `utf-8`);
  console.log(fileContent);
}
