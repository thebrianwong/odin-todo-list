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
    const addNewTaskToTab = (title="New Task Title", dueDate="Task Due Date", description="Task Description", notes="Task Notes", pinned=false, completed=false) => {
        const currentTabIndex = toDoList.getCurrentTabIndex();
        const currentTab = toDoList.getSpecificChecklistTask(currentTabIndex);
        const newTask = toDoTask(title, dueDate, description, notes, pinned, completed);
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
    const toggleTaskPin = (event) => {
        const taskObject = helperFunctions.getTargetTaskObject(event);
        taskObject.togglePinnedState();
    };
    const addInstructionsChecklistTaskObject = (taskIndex, instructions, completed) => {
        const currentTabObject = toDoList.getCurrentTabObject();
        const taskObject = currentTabObject.getSpecificChecklistTask(taskIndex);
        const newChecklistTask = checklistTaskObject(instructions, completed);
        const newChecklistTaskIndex = taskObject.addTask(newChecklistTask);
        return newChecklistTaskIndex;
    };
    return { addNewTabToTodoArray, editTabName, updateCurrentTab, setFirstTabToCurrentTab,
        addNewTaskToTab, editTaskObjectInfo, toggleTaskComplete, addNewChecklistTaskToTask,
        editChecklistTaskDescription, toggleChecklistTaskComplete, toggleTaskPin,
        addInstructionsChecklistTaskObject, };
})();

export { objectControllerAddEditObject };