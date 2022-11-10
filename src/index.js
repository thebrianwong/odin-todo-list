import { toDoItem } from "./todo_item";
import { checklistObject } from "./checklist";
import { checklistTaskObject } from "./checklist_task";
import { canComplete } from "./complete_component";

let test = checklistTaskObject("ddtest");
console.log(test)
// console.log(test.completed)
console.log(test.completed)
// console.log(test)
Object.assign(test, canComplete(test))

if (test.getCompletedState()) {
    console.log(test.getCompletedState(),"this is now true")
} else {
    console.log(test.getCompletedState(),"this is still false")
}

console.log(test.getCompletedState())
// console.log(test.getCompleted());
// console.log(test)
// console.log(test.getCompleted());
// console.log(test.getTaskDescription())
// test.canComplete(test.state);
// console.log(canComplete())
// console.log(test.canComplete().toggle)
// console.log(test)
console.log(test.toggle())
// console.log(test)
// console.log(test.toggleCompleted())
console.log(test.getCompletedState())
// console.log(test.canComplete(test.state))
// console.log(test.canComplete().toggle());
// console.log(test)
console.log(test.completed)

// console.log(test.getCompleted())

if (test.getCompletedState()) {
    console.log(test.getCompletedState(),"this is now true")
} else {
    console.log(test.getCompletedState(),"this is still false")
}

console.log(test.getCompletedState())

console.log(test)