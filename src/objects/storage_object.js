import { helperFunctions } from "./helper_functions";
import { toDoList } from "./todo_list_object";
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";

const storage = (() => {
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
            "due-date": "${taskObject.getTaskDueDate()}",
            "description": "${taskObject.getTaskDescription()}",
            "notes": "${taskObject.getTaskNotes()}",
            "completed": ${taskObject.getCompletedState()},
            "pinned": ${taskObject.getPinnedState()},
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
    return { initializeTodoList, addTab, addTask, addChecklistTask}
})();

export { storage };