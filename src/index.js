import { toDoTask } from "./todo_task_object";
import { checklistObject } from "./checklist_object";
import { checklistTaskObject } from "./checklist_task_object";
import { descriptionBehaviorComponent } from "./description_component";
import { completedBehaviorComponent } from "./completed_component";

// testing todo task object
import { titleBehaviorComponent } from "./title_component";
// import { descriptionBehaviorComponent } from "./description_component";
import { dueDateBehaviorComponent } from "./due_date_component";
import { notesBehaviorComponent } from "./notes_component";
import { checklistBehaviorComponent } from "./checklist_component";
import { pinnedBehaviorComponent } from "./pinned_component";




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

let importantTask = toDoTask("Make Cereal", "part of breakfast plan", "this morning", "make sure to put milk back in fridge");
console.log(importantTask)
console.log(importantTask.getTaskTitle())
console.log(importantTask.getTaskDescription())
console.log(importantTask.getTaskDueDate())
console.log(importantTask.getTaskNotes())
console.log(importantTask.getPinnedState())
console.log(importantTask.getCompletedState())

importantTask.setTaskTitle("Make Chicken Broth")
importantTask.setTaskDescription("requires 1 chicken and 1 broth")
importantTask.setTaskDueDate("before I caught this cold")
importantTask.setTaskNotes("don't sneeze into pot")
importantTask.togglePinnedState();
importantTask.toggleCompletedState();

console.log(importantTask.getTaskTitle())
console.log(importantTask.getTaskDescription())
console.log(importantTask.getTaskDueDate())
console.log(importantTask.getTaskNotes())
console.log(importantTask.getPinnedState())
console.log(importantTask.getCompletedState())

console.log(importantTask.getChecklist());
importantTask.addChecklist(["chicken", "broth"])
console.log(importantTask.getChecklist());
importantTask.removeChecklist();
console.log(importantTask.getChecklist());