import { helperFunctions } from "./helper_functions";
import { toDoList } from "./todo_list_object";
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";

const storage = (() => {
    const initializeTodoList = () => {
        const emptyObjectString = `{
            "current_tab": ${toDoList.getCurrentTabIndex()},
            "tabs": {}
        }`;
        const parsedString = JSON.parse(emptyObjectString);
        console.log(parsedString)
        const stringifiedObject = JSON.stringify(parsedString);
        localStorage.setItem("to_do_list", stringifiedObject);
    };
    const addTab = (tabIndex) => {
        const tabObject = toDoList.getSpecificChecklistTask(tabIndex);
        const tabRawString = `{
            "title": "${tabObject.getTaskTitle()}",
            "tasks": {}
        }`;
        const tabParsedString = JSON.parse(tabRawString);
        const todoListRawString = localStorage.getItem("to_do_list");
        const todoListParsedString = JSON.parse(todoListRawString);
        todoListParsedString["tabs"][`tab_${tabIndex}`] = tabParsedString;
        const todoListStringifiedObject = JSON.stringify(todoListParsedString);
        localStorage.setItem("to_do_list", todoListStringifiedObject);
    };
    const addTask = (tabIndex, taskIndex) => {
        const tabObject = toDoList.getSpecificChecklistTask(tabIndex);
        const taskObject = tabObject.getSpecificChecklistTask(taskIndex);
        const taskRawString = `{
            "title": "${taskObject.getTaskTitle()}",
            "due-date": "${taskObject.getTaskDueDate()}",
            "description": "${taskObject.getTaskDescription()}",
            "notes": "${taskObject.getTaskNotes()}",
            "completed": ${taskObject.getCompletedState()},
            "pinned": ${taskObject.getPinnedState()},
            "checklist_tasks": {}
        }`;
        const taskParsedString = JSON.parse(taskRawString);
        const todoListRawString = localStorage.getItem("to_do_list");
        const todoListParsedString = JSON.parse(todoListRawString);
        todoListParsedString["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`] = taskParsedString;
        const todoListStringifiedObject = JSON.stringify(todoListParsedString);
        localStorage.setItem("to_do_list", todoListStringifiedObject);
    };
    const addChecklistTask = (tabIndex, taskIndex, checklistTaskIndex) => {
        const tabObject = toDoList.getSpecificChecklistTask(tabIndex);
        const taskObject = tabObject.getSpecificChecklistTask(taskIndex);
        const checklistTaskObject = taskObject.getSpecificChecklistTask(checklistTaskIndex);
        const checklistTaskRawString = `{
            "description": "${checklistTaskObject.getTaskDescription()}",
            "completed": ${checklistTaskObject.getCompletedState()}
        }`;
        const checklistTaskParsedString = JSON.parse(checklistTaskRawString);
        const todoListRawString = localStorage.getItem("to_do_list");
        const todoListParsedString = JSON.parse(todoListRawString);
        todoListParsedString["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["checklist_tasks"][`checklist_task_${checklistTaskIndex}`] = checklistTaskParsedString;
        const todoListStringifiedObject = JSON.stringify(todoListParsedString);
        localStorage.setItem("to_do_list", todoListStringifiedObject);
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