import { helperFunctions } from "./helper_functions";
import { toDoList } from "./todo_list_object";
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";

const todoListStorage = (() => {
    const initializeTodoList = () => {
        const todoListJSONString = `{
            "current_tab": ${toDoList.getCurrentTabIndex()},
            "tabs": {}
        }`;
        const todoListParsedObject = JSON.parse(todoListJSONString);
        updateLocalStorageValue(todoListParsedObject);
    };
    const addTab = (tabIndex) => {
        const tabObject = helperFunctions.getTabObject(tabIndex);
        const todoListParsedObject = getLocalStorageValue();
        const tabJSONString = `{
            "title": "${tabObject.getTaskTitle()}",
            "tasks": {}
        }`;
        const tabParsedObject = JSON.parse(tabJSONString);
        todoListParsedObject["tabs"][`tab_${tabIndex}`] = tabParsedObject;
        updateLocalStorageValue(todoListParsedObject);
    };
    const addTask = (tabIndex, taskIndex) => {
        const taskObject = helperFunctions.getTaskObject(tabIndex, taskIndex);
        const todoListParsedObject = getLocalStorageValue();
        const taskJSONString = `{
            "title": "${taskObject.getTaskTitle()}",
            "due_date": "${taskObject.getTaskDueDate()}",
            "description": "${taskObject.getTaskDescription()}",
            "notes": "${taskObject.getTaskNotes()}",
            "pinned": ${taskObject.getPinnedState()},
            "completed": ${taskObject.getCompletedState()},
            "checklist_tasks": {}
        }`;
        const taskParsedObject = JSON.parse(taskJSONString);
        todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`] = taskParsedObject;
        updateLocalStorageValue(todoListParsedObject);
    };
    const addChecklistTask = (tabIndex, taskIndex, checklistTaskIndex) => {
        const checklistTaskObject = helperFunctions.getChecklistTaskObject(tabIndex, taskIndex, checklistTaskIndex);
        const todoListParsedObject = getLocalStorageValue();
        const checklistTaskJSONString = `{
            "description": "${checklistTaskObject.getTaskDescription()}",
            "completed": ${checklistTaskObject.getCompletedState()}
        }`;
        const checklistTaskParsedObject = JSON.parse(checklistTaskJSONString);
        todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["checklist_tasks"][`checklist_task_${checklistTaskIndex}`] = checklistTaskParsedObject;
        updateLocalStorageValue(todoListParsedObject);
    };
    const getLocalStorageValue = () => {
        const todoListJSONString = localStorage.getItem("to_do_list");
        const todoListParsedObject = JSON.parse(todoListJSONString);
        return todoListParsedObject;
    };
    const updateLocalStorageValue = (newValue) => {
        const updatedJSONStringValue = JSON.stringify(newValue);
        localStorage.setItem("to_do_list", updatedJSONStringValue);
    };
    const setCurrentTab = (tabIndex) => {
        const todoListParsedObject = getLocalStorageValue();
        todoListParsedObject["current_tab"] = Number(tabIndex);
        updateLocalStorageValue(todoListParsedObject)
    };
    const setTabName = (tabIndex) => {
        const tabObject = helperFunctions.getTabObject(tabIndex);
        const todoListParsedObject = getLocalStorageValue();
        todoListParsedObject["tabs"][`tab_${tabIndex}`]["title"] = tabObject.getTaskTitle();
        updateLocalStorageValue(todoListParsedObject);
    };
    const setTaskSubcontainerValue = (tabIndex, taskIndex, subcontainerType) => {
        const taskObject = helperFunctions.getTaskObject(tabIndex, taskIndex);
        const todoListParsedObject = getLocalStorageValue();
        if (subcontainerType === "Title") {
            todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["title"] = taskObject.getTaskTitle();
        } else if (subcontainerType === "Due Date") {
            todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["due_date"] = taskObject.getTaskDueDate();
        } else if (subcontainerType === "Description") {
            todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["description"] = taskObject.getTaskDescription();
        } else if (subcontainerType === "Notes") {
            todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["notes"] = taskObject.getTaskNotes();
        };
        updateLocalStorageValue(todoListParsedObject);
    };
    const toggleTaskCompleted = (tabIndex, taskIndex) => {
        const taskObject = helperFunctions.getTaskObject(tabIndex, taskIndex);
        const todoListParsedObject = getLocalStorageValue();
        todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["completed"] = taskObject.getCompletedState();
        updateLocalStorageValue(todoListParsedObject);
    };
    const toggleTaskPinned = (tabIndex, taskIndex) => {
        const taskObject = helperFunctions.getTaskObject(tabIndex, taskIndex);
        const todoListParsedObject = getLocalStorageValue();
        todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["pinned"] = taskObject.getPinnedState();
        updateLocalStorageValue(todoListParsedObject);
    };
    const setChecklistTaskDescription = (tabIndex, taskIndex, checklistTaskIndex) => {
        const checklistTaskObject = helperFunctions.getChecklistTaskObject(tabIndex, taskIndex, checklistTaskIndex);
        const todoListParsedObject = getLocalStorageValue();
        todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["checklist_tasks"][`checklist_task_${checklistTaskIndex}`]["description"] = checklistTaskObject.getTaskDescription();
        updateLocalStorageValue(todoListParsedObject);
    };
    const toggleChecklistTaskCompleted = (tabIndex, taskIndex, checklistTaskIndex) => {
        const checklistTaskObject = helperFunctions.getChecklistTaskObject(tabIndex, taskIndex, checklistTaskIndex);
        const todoListParsedObject = getLocalStorageValue();
        todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["checklist_tasks"][`checklist_task_${checklistTaskIndex}`]["completed"] = checklistTaskObject.getCompletedState();
        updateLocalStorageValue(todoListParsedObject);
    };
    const removeTab = (tabIndex) => {
        const todoListParsedObject = getLocalStorageValue();
        todoListParsedObject["tabs"][`tab_${tabIndex}`] = null;
        updateLocalStorageValue(todoListParsedObject);
    };
    const removeTask = (tabIndex, taskIndex) => {
        const todoListParsedObject = getLocalStorageValue();
        todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`] = null;
        updateLocalStorageValue(todoListParsedObject);
    };
    const removeChecklistTask = (tabIndex, taskIndex, checklistTaskIndex) => {
        const todoListParsedObject = getLocalStorageValue();
        todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["checklist_tasks"][`checklist_task_${checklistTaskIndex}`] = null;
        updateLocalStorageValue(todoListParsedObject);
    };
    const getCurrentTabIndex = () => {
        const todoListParsedObject = getLocalStorageValue();
        const currentTabIndex = todoListParsedObject["current_tab"];
        return currentTabIndex;
    };
    const getTabTitle = (tabIndex) => {
        const todoListParsedObject = getLocalStorageValue();
        const tabTitle = todoListParsedObject["tabs"][`tab_${tabIndex}`]["title"];
        return tabTitle;
    };
    const getTaskValues = (tabIndex, taskIndex) => {
        const todoListParsedObject = getLocalStorageValue();
        let taskValues = [];
        const taskTitle = todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["title"];
        taskValues.push(taskTitle);
        const taskDueDate = todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["due_date"];
        taskValues.push(taskDueDate);
        const taskDescription = todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["description"];
        taskValues.push(taskDescription);
        const taskNotes = todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["notes"];
        taskValues.push(taskNotes);
        const taskPinned = todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["pinned"];
        taskValues.push(taskPinned);
        const taskCompleted = todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["completed"];
        taskValues.push(taskCompleted);
        return taskValues;
    };
    const getChecklistTaskValues = (tabIndex, taskIndex, checklistTaskIndex) => {
        const todoListParsedObject = getLocalStorageValue();
        let checklistTaskValues = [];
        const checklistTaskDescription = todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["checklist_tasks"][`checklist_task_${checklistTaskIndex}`]["description"];
        checklistTaskValues.push(checklistTaskDescription);
        const checklistTaskCompleted = todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["checklist_tasks"][`checklist_task_${checklistTaskIndex}`]["completed"];
        checklistTaskValues.push(checklistTaskCompleted);
        return checklistTaskValues;
    };
    const checkForExistingStorage = () => {
        if (localStorage.getItem("to_do_list")) {
            // prob loadInLocalStorage()
            return true;
        } else {
            // prob loadInInstructionsPage()
            return false;
        }
    };
    const getTabObjects = () => {
        const todoListParsedObject = todoListStorage.getLocalStorageValue();
        const tabObjects = todoListParsedObject["tabs"];
        return tabObjects;
    };
    const getTaskObjects = (tabIndex) => {
        const todoListParsedObject = todoListStorage.getLocalStorageValue();
        const taskObjects = todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"];
        return taskObjects;
    };
    const getChecklistTaskObjects = (tabIndex, taskIndex) => {
        const todoListParsedObject = todoListStorage.getLocalStorageValue();
        const checklistTaskObjects = todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["checklist_tasks"];
        return checklistTaskObjects;
    };
    // const updateLocalStorage = (objectType, tabIndex, taskIndex, checklistTaskIndex) => {
    //     const todoListRawString = localStorage.getItem("to_do_list");
    //     const todoListParsedString = JSON.parse(todoListRawString);
    //     let objectParsedString = undefined;
    //     if (objectType === "Tab") {
    //         const tabObject = toDoList.getSpecificChecklistTask(tabIndex);
    //         const tabRawString = `{
    //             "title": "${tabObject.getTaskTitle()}",
    //             "tasks": {}
    //         }`;
    //         objectParsedString = JSON.parse(tabRawString);
    //     } else if (objectType === "Task") {
    //         const tabObject = toDoList.getSpecificChecklistTask(tabIndex);
    //         const taskObject = tabObject.getSpecificChecklistTask(taskIndex);
    //         const taskRawString = `{
    //             "title": "${taskObject.getTaskTitle()}",
    //             "due-date": "${taskObject.getTaskDueDate()}",
    //             "description": "${taskObject.getTaskDescription()}",
    //             "notes": "${taskObject.getTaskNotes()}",
    //             "completed": "${taskObject.getCompletedState()}",
    //             "pinned": "${taskObject.getPinnedState()}",
    //             "checklist_tasks": {}
    //         }`;
    //         objectParsedString = JSON.parse(taskRawString);
    //     }
    // };
    return { initializeTodoList, addTab, addTask, addChecklistTask, setCurrentTab, setTabName, setTaskSubcontainerValue, toggleTaskCompleted, toggleTaskPinned, setChecklistTaskDescription, toggleChecklistTaskCompleted, removeTab, removeTask, removeChecklistTask, getCurrentTabIndex, getTabTitle, getTaskValues, getChecklistTaskValues, checkForExistingStorage, getLocalStorageValue, getTabObjects, getTaskObjects, getChecklistTaskObjects, }
})();

export { todoListStorage };