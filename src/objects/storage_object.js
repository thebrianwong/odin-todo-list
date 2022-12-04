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
    const setChecklistTask = (tabIndex, taskIndex, checklistTaskIndex) => {
        // const 
    };
    return { initializeTodoList, setTab, setChecklistTask}
})();

export { storage };