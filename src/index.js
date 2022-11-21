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

// testing list that contain everything
import { toDoList } from "./objects/todo_list_object";

// testing for DOM controller objects
import { eventBundler } from "./objects/event_bundler_object";
import { eventAssigner } from "./objects/event_assigner_object";

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

importantTask.addTask(test)
console.log(importantTask.getChecklistTasks())
console.log(importantTask.getSpecificChecklistTask(0))
console.log(importantTask.getSpecificChecklistTask(0).getTaskDescription())

let tab1 = toDoTab("kitchen stuff")
console.log(tab1)
tab1.addTask(importantTask)
console.log(tab1)
console.log(tab1.getChecklistTasks())
console.log(tab1.getSpecificChecklistTask(0))
console.log(tab1.getSpecificChecklistTask(0).getTaskTitle())

let anotherImportantTask = toDoTask("Clean pot", "part of chores plan", "this afternoon", "make sure to use soap");
console.log(tab1)
tab1.addTask(anotherImportantTask)
console.log(tab1.getSpecificChecklistTask(1))
console.log(tab1.getSpecificChecklistTask(1).getTaskTitle())

toDoList.addTask(tab1)
console.log(toDoList.getChecklistTasks())
console.log(toDoList.getSpecificChecklistTask(0))
console.log(toDoList.getSpecificChecklistTask(0).getTaskTitle())

// DOMControllerRemove.removeTab(0);
console.log(toDoList.getChecklistTasks())

let tab2 = toDoTab("hee hee")
toDoList.addTask(tab2)
console.log(toDoList.getChecklistTasks())

/* 
console.log(importantTask.getChecklistTasks());
let index1 = importantTask.addTask(["chicken", "broth"])
console.log(importantTask.getChecklistTasks());
importantTask.removeTask(index1);
console.log(importantTask.getChecklistTasks());

let checklist = checklistObject();
console.log(checklist)
console.log(checklist.addTask("bend toilet"))
console.log(checklist.addTask("pinch toilet"))
console.log(checklist.getChecklistTasks())
console.log(checklist.getSpecificChecklistTask(1))
checklist.removeTask(0)
console.log(checklist.getChecklistTasks())

let index2 = importantTask.addTask(checklist)
console.log(importantTask)
console.log(importantTask.getChecklistTasks())
// console.log(importantTask.getChecklist().getChecklistTasks())
let index3 = console.log(importantTask.addTask(test))
console.log(importantTask.getSpecificChecklistTask(index2))
console.log(importantTask.getSpecificChecklistTask(2).getTaskDescription())
console.log(importantTask.getSpecificChecklistTask(2).getCompletedState())
console.log(importantTask.getSpecificChecklistTask(2).toggleCompletedState())
console.log(importantTask.getSpecificChecklistTask(2).getCompletedState())
console.log(importantTask.getSpecificChecklistTask(2).setTaskDescription("IT WORKS"))
console.log(importantTask.getSpecificChecklistTask(2).getTaskDescription())

let tab = toDoTab("kitchen stuff")
let listOfStuff = checklistObject()
// tab.addChecklist(listOfStuff)
console.log(tab.addTask(importantTask))
console.log(tab)
// console.log(tab.getChecklist())
console.log(tab.getSpecificChecklistTask(0))
console.log(tab.getSpecificChecklistTask(0).getTaskTitle())

let anotherImportantTask = toDoTask("Clean pot", "part of chores plan", "this afternoon", "make sure to use soap");
console.log(tab)
// console.log(tab.getChecklist())
console.log(tab.addTask(anotherImportantTask))
console.log(tab.getSpecificChecklistTask(1))
console.log(tab.getSpecificChecklistTask(1).getTaskTitle())

console.log(toDoList)
let theList = toDoList;
console.log(theList)
// console.log(toDoList.getChecklist())
let index4 = console.log(toDoList.addTask(tab))
// console.log(toDoList.getChecklist())
console.log(toDoList.getChecklistTasks())
// console.log(toDoList.getChecklist().getChecklist().getChecklistTasks())
console.log(toDoList.getSpecificChecklistTask(0))
console.log(toDoList.getSpecificChecklistTask(0).getTaskTitle())
 */

eventAssigner.addNewTabListener();
// eventAssigner.addEditTabListener();
eventAssigner.addEditTabButtonListener();
eventAssigner.addRemoveTabButtonListenerForInitialTabs();

// button (target button will always work)

/* const test1 = document.querySelector("#test1")
test1.addEventListener("click", () => {
    console.log("test1")
}) */

// img

/* const test2 = document.querySelector("#test2")
test2.addEventListener("click", () => {
    console.log("test2")
}) */