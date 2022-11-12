import { toDoTask } from "./todo_task_object";
import { checklistObject } from "./checklist_object";
import { checklistTaskObject } from "./checklist_task_object";
import { descriptionBehaviorComponent } from "./description_component";
import { completedBehaviorComponent } from "./completed_component";





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

console.log(test.getTaskDescription())
test.setTaskDescription("wowwie")
console.log(test.getTaskDescription())