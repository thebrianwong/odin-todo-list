import { toDoList } from "./todo_list_object";
import { toDoTab } from "./todo_tab_object";
import { titleBehaviorComponent } from "../components/title_component";
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";
import { helperFunctions } from "./helper_functions";
import { toDoTask } from "./todo_task_object";
import { checklistTaskObject } from "./checklist_task_object";

const objectControllerAddEditObject = (() => {
    const addNewTabToTodoArray = () => {
        const newTab = toDoTab("New Tab");
        return toDoList.addTask(newTab);
    }
    const editTabName = (event) => {
        const index = event.target.parentElement.dataset.tabIndex;
        const targetTab = toDoList.getSpecificChecklistTask(index);
        targetTab.setTaskTitle(event.target.value);
    }
    const updateCurrentTab = (event) => {
        const newCurrentTab = helperFunctions.ensureCorrectTabElement(event);
        const index = newCurrentTab.dataset.tabIndex;
        toDoList.setCurrentTabIndex(index)
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
    const addNewTaskToTab = () => {
        const currentTabIndex = toDoList.getCurrentTabIndex();
        const currentTab = toDoList.getSpecificChecklistTask(currentTabIndex);
        const newTask = toDoTask("New Task", "Task Due Date", "Task Description", "Task Notes");
        const newTaskIndex = currentTab.addTask(newTask);
        return newTaskIndex;
    };
    const editTaskObjectInfo = (event) => {
        const taskObject = helperFunctions.getTargetTaskObject(event);
        const newTaskTitleValue = event.target.value;
        const taskSubcontainerType = helperFunctions.getSubcontainerType(event);
        if (taskSubcontainerType.includes("to-do-title-section")) {
            return taskObject.setTaskTitle(newTaskTitleValue);
        } else if (taskSubcontainerType.includes("to-do-due-date-section")) {
            return taskObject.setTaskDueDate(newTaskTitleValue);
        } else if (taskSubcontainerType.includes("to-do-description-section")) {
            return taskObject.setTaskDescription(newTaskTitleValue);
        } else if (taskSubcontainerType.includes("to-do-notes-section")) {
            return taskObject.setTaskNotes(newTaskTitleValue);
        };
    };
    const toggleTaskComplete = (event) => {
        const taskObject = helperFunctions.getTargetTaskObject(event);
        taskObject.toggleCompletedState();
    };
    const addNewChecklistTaskToTask = (event) => {
        const taskObject = helperFunctions.getTargetTaskObject(event);
        const newChecklistTask = checklistTaskObject("Checklist Task Description");
        const newChecklistTaskIndex = taskObject.addTask(newChecklistTask);
        return newChecklistTaskIndex
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
    return { addNewTabToTodoArray, editTabName, updateCurrentTab, setFirstTabToCurrentTab,
        addNewTaskToTab, editTaskObjectInfo, toggleTaskComplete, addNewChecklistTaskToTask, editChecklistTaskDescription, toggleChecklistTaskComplete};
})();

export { objectControllerAddEditObject };