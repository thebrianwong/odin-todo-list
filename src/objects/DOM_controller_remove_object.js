import { toDoList } from "./todo_list_object"
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";

const DOMControllerRemove = (() => {
    const removeTab = (tabIndex) => {
        toDoList.removeTask(tabIndex);
    };
    const removeToDoTask = (tab, toDoTaskIndex) => {
        tab.removeTask(toDoTaskIndex);
    };
    const removeChecklistTask = (toDoTask, checklistTaskIndex) => {
        toDoTask.removeTask(checklistTaskIndex);
    };
    return { removeTab, removeToDoTask, removeChecklistTask };
})();

export { DOMControllerRemove };