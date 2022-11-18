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
import { DOMControllerAdd } from "./objects/DOM_controller_add_object";
import { DOMControllerRemove } from "./objects/DOM_controller_remove_object";

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

console.log(DOMControllerAdd.addChecklistTask(importantTask, test))
console.log(importantTask.getChecklistTasks())
console.log(importantTask.getSpecificChecklistTask(0))
console.log(importantTask.getSpecificChecklistTask(0).getTaskDescription())

let tab = toDoTab("kitchen stuff")
console.log(tab)
console.log(DOMControllerAdd.addToDoTask(tab, importantTask))
console.log(tab)
console.log(tab.getChecklistTasks())
console.log(tab.getSpecificChecklistTask(0))
console.log(tab.getSpecificChecklistTask(0).getTaskTitle())

let anotherImportantTask = toDoTask("Clean pot", "part of chores plan", "this afternoon", "make sure to use soap");
console.log(tab)
console.log(DOMControllerAdd.addToDoTask(tab, anotherImportantTask))
console.log(tab.getSpecificChecklistTask(1))
console.log(tab.getSpecificChecklistTask(1).getTaskTitle())

console.log(DOMControllerAdd.addTab(tab))
console.log(toDoList.getChecklistTasks())
console.log(toDoList.getSpecificChecklistTask(0))
console.log(toDoList.getSpecificChecklistTask(0).getTaskTitle())

DOMControllerRemove.removeTab(0);
console.log(toDoList.getChecklistTasks())

console.log(DOMControllerAdd.addTab(tab))
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

const addTabButton = document.querySelector(".add-tab");
addTabButton.addEventListener("click", () => {
    const toDoTabSection = document.querySelector(".to-do-tab-section");
    const newTab = document.createElement("div");
    newTab.classList.add("tab-title");
    newTab.innerHTML = `
    <button class="switch-tab">
        <h2>Homework</h2>
    </button>
    <button class="edit-tab">
        <img src="assets/pencil.png" alt="Edit tab name button">
    </button>
    <button class="remove-tab">
        <img src="assets/close.png" alt="Remove tab button">
    </button>
    `;
    toDoTabSection.insertBefore(newTab, addTabButton);
})

const newTabNameInput = (event) => {
    if (event.code === "Enter") {
        console.log("This works")
    }
}

const tabInput = document.querySelector(".tab-name-input")
tabInput.addEventListener("keydown", newTabNameInput)