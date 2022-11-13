import { toDoTask } from "./objects/todo_task_object";
import { checklistObject } from "./objects/checklist_object";
import { checklistTaskObject } from "./objects/checklist_task_object";
import { descriptionBehaviorComponent } from "./components/description_component";
import { completedBehaviorComponent } from "./components/completed_component";

// testing todo task object
import { titleBehaviorComponent } from "./components/title_component";
// import { descriptionBehaviorComponent } from "./description_component";
import { dueDateBehaviorComponent } from "./components/due_date_component";
import { notesBehaviorComponent } from "./components/notes_component";
import { containsChecklistBehaviorComponent } from "./components/contains_checklist_component";
import { pinnedBehaviorComponent } from "./components/pinned_component";

// testing checklist object
// import { checklistObject } from "./checklist_object";
import { containsChecklistTaskBehaviorComponent } from "./components/contains_checklist_task_component";

// testing tabs (arrays that contain many to do tasks)
import { toDoTab } from "./objects/todo_tab_object";

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

let checklist = checklistObject();
console.log(checklist)
console.log(checklist.addTask("bend toilet"))
console.log(checklist.addTask("pinch toilet"))
console.log(checklist.getChecklistTasks())
console.log(checklist.getSpecificChecklistTask(1))
checklist.removeTask(0)
console.log(checklist.getChecklistTasks())

importantTask.addChecklist(checklist)
console.log(importantTask)
console.log(importantTask.getChecklist())
console.log(importantTask.getChecklist().getChecklistTasks())
console.log(importantTask.getChecklist().addTask(test))
console.log(importantTask.getChecklist().getSpecificChecklistTask(2))
console.log(importantTask.getChecklist().getSpecificChecklistTask(2).getTaskDescription())
console.log(importantTask.getChecklist().getSpecificChecklistTask(2).getCompletedState())
console.log(importantTask.getChecklist().getSpecificChecklistTask(2).toggleCompletedState())
console.log(importantTask.getChecklist().getSpecificChecklistTask(2).getCompletedState())
console.log(importantTask.getChecklist().getSpecificChecklistTask(2).setTaskDescription("IT WORKS"))
console.log(importantTask.getChecklist().getSpecificChecklistTask(2).getTaskDescription())

let tab = toDoTab("kitchen stuff")
let listOfStuff = checklistObject()
tab.addChecklist(listOfStuff)
console.log(tab.getChecklist().addTask(importantTask))
console.log(tab)
console.log(tab.getChecklist())
console.log(tab.getChecklist().getSpecificChecklistTask(0))
console.log(tab.getChecklist().getSpecificChecklistTask(0).getTaskTitle())

let anotherImportantTask = toDoTask("Clean pot", "part of chores plan", "this afternoon", "make sure to use soap");
console.log(tab)
console.log(tab.getChecklist())
console.log(tab.getChecklist().addTask(anotherImportantTask))
console.log(tab.getChecklist().getSpecificChecklistTask(1))
console.log(tab.getChecklist().getSpecificChecklistTask(1).getTaskTitle())