import { toDoItem } from "./todo_item";
import { checklistObject } from "./checklist";
import { checklistTaskObject } from "./checklist_task";
import { canComplete } from "./complete_component";

let test = checklistTaskObject("ddtest");
console.log(test)
console.log(test.getTaskDescription())
// test.canComplete(test.state);
console.log(test.completed)
console.log(canComplete)
// console.log(test.toggle())
console.log(test.canComplete().toggle())
// console.log(test.canComplete(test.state))
// console.log(test.canComplete().toggle());
console.log(test)