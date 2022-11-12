import { toDoItem } from "./todo_item";
import { checklistObject } from "./checklist";
import { checklistTaskObject } from "./checklist_task";
import { canComplete } from "./complete_component";





let test = checklistTaskObject("ddtest");
console.log(test)

console.log(test.getCompletedState())

if (test.getCompletedState()) {
    console.log(test.getCompletedState(),"this is now true")
} else {
    console.log(test.getCompletedState(),"this is still false")
}

console.log(test.getCompletedState())

console.log(test.toggleCompletedState())

console.log(test.getCompletedState())


if (test.getCompletedState()) {
    console.log(test.getCompletedState(),"this is now true")
} else {
    console.log(test.getCompletedState(),"this is still false")
}

console.log(test.getCompletedState())

console.log(test)
