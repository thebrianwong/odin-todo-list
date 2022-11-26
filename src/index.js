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
import { DOMControllerAddEdit } from "./objects/DOM_controller_add_edit";

// let test = checklistTaskObject("ddtest");
// console.log(test)

// console.log(test.getCompletedState())

// if (test.getCompletedState()) {
//     console.log(test.getCompletedState(),"this is now true")
// } else {
//     console.log(test.getCompletedState(),"this is still false")
// }

// console.log(test.getCompletedState())

// console.log(test.toggleCompletedState())

// console.log(test.getCompletedState())


// if (test.getCompletedState()) {
//     console.log(test.getCompletedState(),"this is now true")
// } else {
//     console.log(test.getCompletedState(),"this is still false")
// }

// console.log(test.getCompletedState())

// console.log(test)

// console.log(test.getTaskDescription())
// test.setTaskDescription("wowwie")
// console.log(test.getTaskDescription())

// let importantTask = toDoTask("Make Cereal", "part of breakfast plan", "this morning", "make sure to put milk back in fridge");
// console.log(importantTask)
// console.log(importantTask.getTaskTitle())
// console.log(importantTask.getTaskDescription())
// console.log(importantTask.getTaskDueDate())
// console.log(importantTask.getTaskNotes())
// console.log(importantTask.getPinnedState())
// console.log(importantTask.getCompletedState())

// importantTask.setTaskTitle("Make Chicken Broth")
// importantTask.setTaskDescription("requires 1 chicken and 1 broth")
// importantTask.setTaskDueDate("before I caught this cold")
// importantTask.setTaskNotes("don't sneeze into pot")
// importantTask.togglePinnedState();
// importantTask.toggleCompletedState();

// console.log(importantTask.getTaskTitle())
// console.log(importantTask.getTaskDescription())
// console.log(importantTask.getTaskDueDate())
// console.log(importantTask.getTaskNotes())
// console.log(importantTask.getPinnedState())
// console.log(importantTask.getCompletedState())

// importantTask.addTask(test)
// console.log(importantTask.getChecklistTasks())
// console.log(importantTask.getSpecificChecklistTask(0))
// console.log(importantTask.getSpecificChecklistTask(0).getTaskDescription())

let tab1 = toDoTab("Default test")
// console.log(tab1)
// tab1.addTask(importantTask)
// console.log(tab1)
// console.log(tab1.getChecklistTasks())
// console.log(tab1.getSpecificChecklistTask(0))
// console.log(tab1.getSpecificChecklistTask(0).getTaskTitle())

// let anotherImportantTask = toDoTask("Clean pot", "part of chores plan", "this afternoon", "make sure to use soap");
// console.log(tab1)
// tab1.addTask(anotherImportantTask)
// console.log(tab1.getSpecificChecklistTask(1))
// console.log(tab1.getSpecificChecklistTask(1).getTaskTitle())

toDoList.addTask(tab1)
// console.log(toDoList.getChecklistTasks())
// console.log(toDoList.getSpecificChecklistTask(0))
// console.log(toDoList.getSpecificChecklistTask(0).getTaskTitle())

// // DOMControllerRemove.removeTab(0);
// console.log(toDoList.getChecklistTasks())

// let tab2 = toDoTab("hee hee")
// toDoList.addTask(tab2)
// console.log(toDoList.getChecklistTasks())

let task1 = toDoTask("Make Money TEST 0", "Task Due Date", "Task Description", "Task Notes");
console.log(tab1.addTask(task1))

let task2 = toDoTask("Make Money TEST AGAIN 1", "Task Due Date", "Task Description", "Task Notes");
tab1.addTask(task2)

let task3 = toDoTask("Make Money TEST AGAIN AGAIN 2", "Task Due Date", "Task Description", "Task Notes");
tab1.addTask(task3)

let task4 = toDoTask("Make Money TEST AGAIN AGAIN AGAIN 3", "Task Due Date", "Task Description", "Task Notes");
tab1.addTask(task4)

let tab2 = toDoTab("Test for loading in task objects")
toDoList.addTask(tab2)
let taskA = toDoTask("TEST OF THE OUTDOOR WARNING SYSTEM", "Task Due Date", "Task Description", "Task Notes");
tab2.addTask(taskA)
let taskB = toDoTask("THIS IS ONLY A TEST", "Task Due Date", "Task Description", "Task Notes");
tab2.addTask(taskB)

let checklistTaskA = checklistTaskObject("Checklist Task Description TEST A")
taskA.addTask(checklistTaskA)
let checklistTaskB = checklistTaskObject("Checklist Task Description TEST B")
taskA.addTask(checklistTaskB)
let checklistTaskC = checklistTaskObject("Checklist Task Description TEST C")
taskB.addTask(checklistTaskC)
let checklistTaskD = checklistTaskObject("Checklist Task Description TEST D")
taskB.addTask(checklistTaskD)
let checklistTaskE = checklistTaskObject("Checklist Task Description TEST D")
taskB.addTask(checklistTaskE)

taskB.removeTask(1)

eventAssigner.addNewTabListener();
// eventAssigner.addEditTabListener();
eventAssigner.addEditTabButtonListener();
eventAssigner.addRemoveTabButtonListener();



console.log(toDoList)
console.log(toDoList.getChecklistTasks())
console.log(toDoList.getCurrentTabIndex())
console.log(tab1.getChecklistTasks())
console.log(tab1.getSpecificChecklistTask(0))
console.log(tab1.getSpecificChecklistTask(0).getTaskTitle())

DOMControllerAddEdit.setDefaultCurrentTabDOM(0)

eventAssigner.addSwitchTabListener()

eventAssigner.addNewTaskListener();

eventAssigner.addRemoveTaskButtonListener();

eventAssigner.addEditTaskListeners();

// const heh = () => {
//     console.log("bloop")
// }

// const boi = document.querySelector(".to-do-complete-checkbox")
// boi.addEventListener("click", heh)

eventAssigner.addToggleTaskCompleteListener();
eventAssigner.addNewChecklistTaskListener();
eventAssigner.addEditChecklistTaskListeners();

let checklistTask1 = checklistTaskObject("Checklist Task Description TEST")
task1.addTask(checklistTask1)

eventAssigner.addToggleChecklistTaskCompleteListener();
eventAssigner.addRemoveChecklistTaskListener();

eventAssigner.addToggleTaskPinListeners();