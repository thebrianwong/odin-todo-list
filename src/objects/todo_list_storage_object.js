import { toDoList } from "./todo_list_object";
import { helperFunctions } from "./helper_functions";

const todoListStorage = (() => {
    let loadingInContent = false;
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
    const setCurrentTab = (tabIndex) => {
        const todoListParsedObject = getLocalStorageValue();
        tabIndex === null
            ? (todoListParsedObject["current_tab"] = null)
            : (todoListParsedObject["current_tab"] = Number(tabIndex));
        updateLocalStorageValue(todoListParsedObject)
    };
    const setTabName = (tabIndex) => {
        const tabObject = helperFunctions.getTabObject(tabIndex);
        const todoListParsedObject = getLocalStorageValue();
        todoListParsedObject["tabs"][`tab_${tabIndex}`]["title"] = tabObject.getTaskTitle();
        updateLocalStorageValue(todoListParsedObject);
    };
    const getCurrentTabIndex = () => {
        const todoListParsedObject = getLocalStorageValue();
        const currentTabIndex = todoListParsedObject["current_tab"];
        return currentTabIndex;
    };
    const getTabTitle = (tabKey) => {
        const todoListParsedObject = getLocalStorageValue();
        const tabTitle = todoListParsedObject["tabs"][tabKey]["title"];
        return tabTitle;
    };
    const getTabObjects = () => {
        const todoListParsedObject = todoListStorage.getLocalStorageValue();
        const tabObjects = todoListParsedObject["tabs"];
        return tabObjects;
    };
    const removeTab = (tabIndex) => {
        const todoListParsedObject = getLocalStorageValue();
        todoListParsedObject["tabs"][`tab_${tabIndex}`] = null;
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
    const toggleTaskPinned = (tabIndex, taskIndex) => {
        const taskObject = helperFunctions.getTaskObject(tabIndex, taskIndex);
        const todoListParsedObject = getLocalStorageValue();
        todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["pinned"] = taskObject.getPinnedState();
        updateLocalStorageValue(todoListParsedObject);
    };
    const toggleTaskCompleted = (tabIndex, taskIndex) => {
        const taskObject = helperFunctions.getTaskObject(tabIndex, taskIndex);
        const todoListParsedObject = getLocalStorageValue();
        todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["completed"] = taskObject.getCompletedState();
        updateLocalStorageValue(todoListParsedObject);
    };
    const getTaskValues = (tabKey, taskKey) => {
        const todoListParsedObject = getLocalStorageValue();
        let taskValues = [];
        const taskTitle = todoListParsedObject["tabs"][tabKey]["tasks"][taskKey]["title"];
        taskValues.push(taskTitle);
        const taskDueDate = todoListParsedObject["tabs"][tabKey]["tasks"][taskKey]["due_date"];
        taskValues.push(taskDueDate);
        const taskDescription = todoListParsedObject["tabs"][tabKey]["tasks"][taskKey]["description"];
        taskValues.push(taskDescription);
        const taskNotes = todoListParsedObject["tabs"][tabKey]["tasks"][taskKey]["notes"];
        taskValues.push(taskNotes);
        const taskPinned = todoListParsedObject["tabs"][tabKey]["tasks"][taskKey]["pinned"];
        taskValues.push(taskPinned);
        const taskCompleted = todoListParsedObject["tabs"][tabKey]["tasks"][taskKey]["completed"];
        taskValues.push(taskCompleted);
        return taskValues;
    };
    const getTaskObjects = (tabIndex) => {
        const todoListParsedObject = todoListStorage.getLocalStorageValue();
        const taskObjects = todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"];
        return taskObjects;
    };
    const removeTask = (tabIndex, taskIndex) => {
        const todoListParsedObject = getLocalStorageValue();
        todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`] = null;
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
    const getChecklistTaskValues = (tabKey, taskKey, checklistTaskKey) => {
        const todoListParsedObject = getLocalStorageValue();
        let checklistTaskValues = [];
        const checklistTaskDescription = todoListParsedObject["tabs"][tabKey]["tasks"][taskKey]["checklist_tasks"][checklistTaskKey]["description"];
        checklistTaskValues.push(checklistTaskDescription);
        const checklistTaskCompleted = todoListParsedObject["tabs"][tabKey]["tasks"][taskKey]["checklist_tasks"][checklistTaskKey]["completed"];
        checklistTaskValues.push(checklistTaskCompleted);
        return checklistTaskValues;
    };
    const getChecklistTaskObjects = (tabIndex, taskIndex) => {
        const todoListParsedObject = todoListStorage.getLocalStorageValue();
        const checklistTaskObjects = todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["checklist_tasks"];
        return checklistTaskObjects;
    };
    const removeChecklistTask = (tabIndex, taskIndex, checklistTaskIndex) => {
        const todoListParsedObject = getLocalStorageValue();
        todoListParsedObject["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["checklist_tasks"][`checklist_task_${checklistTaskIndex}`] = null;
        updateLocalStorageValue(todoListParsedObject);
    };
    const checkForExistingStorage = () => {
        if (localStorage.getItem("to_do_list")) {
            return true;
        } else {
            return false;
        }
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
    const initializeTodoList = () => {
        const todoListJSONString = `{
            "current_tab": ${toDoList.getCurrentTabIndex()},
            "tabs": {}
        }`;
        const todoListParsedObject = JSON.parse(todoListJSONString);
        updateLocalStorageValue(todoListParsedObject);
    };
    const toggleLoading = () => {
        loadingInContent ? loadingInContent = false : loadingInContent = true;
    };
    const isLoading = () => {
        return loadingInContent;
    };
    return {
        addTab,
        setCurrentTab,
        setTabName,
        getCurrentTabIndex,
        getTabTitle,
        getTabObjects,
        removeTab,
        addTask,
        setTaskSubcontainerValue,
        toggleTaskPinned,
        toggleTaskCompleted,
        getTaskValues,
        getTaskObjects,
        removeTask,
        addChecklistTask,
        setChecklistTaskDescription,
        toggleChecklistTaskCompleted,
        getChecklistTaskValues,
        getChecklistTaskObjects,
        removeChecklistTask,
        checkForExistingStorage,
        getLocalStorageValue,
        initializeTodoList,
        toggleLoading,
        isLoading
    }
})();

export { todoListStorage };