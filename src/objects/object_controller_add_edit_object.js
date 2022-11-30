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
    };
    const addNewTaskToTab = (title="New Task Title", dueDate="Task Due Date", description="Task Description", notes="Task Notes", pinned=false, completed=false) => {
        const currentTabIndex = toDoList.getCurrentTabIndex();
        const currentTab = toDoList.getSpecificChecklistTask(currentTabIndex);
        const newTask = toDoTask(title, dueDate, description, notes, pinned, completed);
        const newTaskIndex = currentTab.addTask(newTask);
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
    const addNewChecklistTaskToTask = (taskIndex, description="Checklist Task Description", completed=false) => {
        const currentTabObject = toDoList.getCurrentTabObject();
        const taskObject = currentTabObject.getSpecificChecklistTask(taskIndex);
        const newChecklistTask = checklistTaskObject(description, completed);
        const newChecklistTaskIndex = taskObject.addTask(newChecklistTask);
        return newChecklistTaskIndex;
    };
    const editChecklistTaskDescription = (event) => {
        const checklistTaskObject = helperFunctions.getTargetChecklistTaskObject(event);
        const newChecklistTaskDescription = event.target.value;
        checklistTaskObject.setTaskDescription(newChecklistTaskDescription);
    };
    const toggleChecklistTaskComplete = (event) => {
        const checklistTaskObject = helperFunctions.getTargetChecklistTaskObject(event);
        checklistTaskObject.toggleCompletedState();
    };
    const toggleTaskPin = (event) => {
        const taskObject = helperFunctions.getTargetTaskObject(event);
        taskObject.togglePinnedState();
    };
    return { addNewTabToTodoArray, editTabName, updateCurrentTab, setFirstTabToCurrentTab,
        addNewTaskToTab, editTaskObjectInfo, toggleTaskComplete, addNewChecklistTaskToTask,
        editChecklistTaskDescription, toggleChecklistTaskComplete, toggleTaskPin, };
})();

export { objectControllerAddEditObject };