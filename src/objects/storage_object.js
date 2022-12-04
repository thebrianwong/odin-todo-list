import { helperFunctions } from "./helper_functions";
import { toDoList } from "./todo_list_object";
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";

const storage = (() => {
    const initializeTodoList = () => {
        const emptyObjectString = `{
            "tabs": {}
        }`;
        const parsedString = JSON.parse(emptyObjectString);
        const stringifiedObject = JSON.stringify(parsedString);
        localStorage.setItem("to_do_list", stringifiedObject);
    };
    const setTab = (tabIndex) => {
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
    const setTask = (tabIndex, taskIndex) => {
        const tabObject = toDoList.getSpecificChecklistTask(tabIndex);
        const taskObject = tabObject.getSpecificChecklistTask(taskIndex);
        const taskRawString = `{
            "title": "${taskObject.getTaskTitle()}",
            "due-date": "${taskObject.getTaskDueDate()}",
            "description": "${taskObject.getTaskDescription()}",
            "notes": "${taskObject.getTaskNotes()}",
            "completed": "${taskObject.getCompletedState()}",
            "pinned": "${taskObject.getPinnedState()}",
            "checklist_tasks": {}
        }`;
        const taskParsedString = JSON.parse(taskRawString);
        const todoListRawString = localStorage.getItem("to_do_list");
        const todoListParsedString = JSON.parse(todoListRawString);
        todoListParsedString["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`] = taskParsedString;
        const todoListStringifiedObject = JSON.stringify(todoListParsedString);
        localStorage.setItem("to_do_list", todoListStringifiedObject);
    };
    const setChecklistTask = (tabIndex, taskIndex, checklistTaskIndex) => {
        const tabObject = toDoList.getSpecificChecklistTask(tabIndex);
        const taskObject = tabObject.getSpecificChecklistTask(taskIndex);
        const checklistTaskObject = taskObject.getSpecificChecklistTask(checklistTaskIndex);
        const checklistTaskRawString = `{
            "description": "${checklistTaskObject.getTaskDescription()}",
            "completed": "${checklistTaskObject.getCompletedState()}"
        }`;
        const checklistTaskParsedString = JSON.parse(checklistTaskRawString);
        const todoListRawString = localStorage.getItem("to_do_list");
        const todoListParsedString = JSON.parse(todoListRawString);
        todoListParsedString["tabs"][`tab_${tabIndex}`]["tasks"][`task_${taskIndex}`]["checklist_tasks"][`checklist_task_${checklistTaskIndex}`] = checklistTaskParsedString;
        const todoListStringifiedObject = JSON.stringify(todoListParsedString);
        localStorage.setItem("to_do_list", todoListStringifiedObject);
    };
    return { initializeTodoList, setTab, setTask, setChecklistTask}
})();

export { storage };