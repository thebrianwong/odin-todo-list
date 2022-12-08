import { toDoList } from "./todo_list_object";
import { toDoTab } from "./todo_tab_object";
import { titleBehaviorComponent } from "../components/title_component";
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";
import { helperFunctions } from "./helper_functions";
import { toDoTask } from "./todo_task_object";
import { checklistTaskObject } from "./checklist_task_object";

const objectControllerAddEditObject = (() => {
    const addNewTabToTodoArray = (tabName="New Tab") => {
        const newTab = toDoTab(tabName);
        return toDoList.addTask(newTab);
    }
    const editTabName = (tabIndex, newTabName) => {
        const tabObject = toDoList.getSpecificChecklistTask(tabIndex);
        tabObject.setTaskTitle(newTabName);
    }
    const updateCurrentTab = (tabIndex) => {
        toDoList.setCurrentTabIndex(tabIndex)
    }
    const setFirstTabToCurrentTab = () => {
        const tabArray = toDoList.getChecklistTasks();
        let firstTab = undefined;
        for (const tab in tabArray) {
            if (tabArray[tab] !== undefined) {
                toDoList.setCurrentTabIndex(tab);
                firstTab = tab;
                return firstTab;
            }
        }
        toDoList.setCurrentTabIndex(null)
        return null
    };
    const addNewTaskToTab = (tabIndex, title="New Task Title", dueDate="Task Due Date", description="Task Description", notes="Task Notes", pinned=false, completed=false) => {
        // const currentTabIndex = toDoList.getCurrentTabIndex();
        const tabObject = toDoList.getSpecificChecklistTask(tabIndex);
        // console.log(tabIndex)
        const newTask = toDoTask(title, dueDate, description, notes, pinned, completed);
        // console.log(newTask)
        const newTaskIndex = tabObject.addTask(newTask);
        return newTaskIndex;
    };
    const editTaskObjectInfo = (taskIndex, buttonType, newTaskSubcontentValue) => {
        const currentTabObject = toDoList.getCurrentTabObject();
        const taskObject = currentTabObject.getSpecificChecklistTask(taskIndex);
        if (buttonType === "Title") {
            taskObject.setTaskTitle(newTaskSubcontentValue);
        } else if (buttonType === "Due Date") {
            taskObject.setTaskDueDate(newTaskSubcontentValue);
        } else if (buttonType === "Description") {
            taskObject.setTaskDescription(newTaskSubcontentValue);
        } else if (buttonType === "Notes") {
            taskObject.setTaskNotes(newTaskSubcontentValue);
        };
    };
    const toggleTaskComplete = (taskIndex) => {
        const currentTabObject = toDoList.getCurrentTabObject();
        const taskObject = currentTabObject.getSpecificChecklistTask(taskIndex);
        taskObject.toggleCompletedState();
    };
    const addNewChecklistTaskToTask = (tabIndex, taskIndex, description="Checklist Task Description", completed=false) => {
        // console.log(taskIndex)
        // console.log(toDoList.getCurrentTabIndex())
        const tabObject = toDoList.getSpecificChecklistTask(tabIndex);
        const taskObject = tabObject.getSpecificChecklistTask(taskIndex);
        const newChecklistTask = checklistTaskObject(description, completed);
        const newChecklistTaskIndex = taskObject.addTask(newChecklistTask);
        return newChecklistTaskIndex;
    };
    const editChecklistTaskDescription = (taskIndex, checklistTaskIndex, newDescriptionValue) => {
        const currentTabObject = toDoList.getCurrentTabObject();
        const taskObject = currentTabObject.getSpecificChecklistTask(taskIndex);
        const checklistTaskObject = taskObject.getSpecificChecklistTask(checklistTaskIndex);
        checklistTaskObject.setTaskDescription(newDescriptionValue);
    };
    const toggleChecklistTaskComplete = (taskIndex, checklistTaskIndex) => {
        const currentTabObject = toDoList.getCurrentTabObject();
        const taskObject = currentTabObject.getSpecificChecklistTask(taskIndex);
        const checklistTaskObject = taskObject.getSpecificChecklistTask(checklistTaskIndex);
        checklistTaskObject.toggleCompletedState();
    };
    const toggleTaskPin = (taskIndex) => {
        const currentTabObject = toDoList.getCurrentTabObject();
        const taskObject = currentTabObject.getSpecificChecklistTask(taskIndex);
        taskObject.togglePinnedState();
    };
    return { addNewTabToTodoArray, editTabName, updateCurrentTab, setFirstTabToCurrentTab,
        addNewTaskToTab, editTaskObjectInfo, toggleTaskComplete, addNewChecklistTaskToTask,
        editChecklistTaskDescription, toggleChecklistTaskComplete, toggleTaskPin, };
})();

export { objectControllerAddEditObject };