import { toDoList } from "./todo_list_object"
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";

const DOMControllerAdd = (() => {
    const addTab = (newTab) => {
        return toDoList.addTask(newTab);
    };
    const addToDoTask = (tab, newToDoTask) => {
        return tab.addTask(newToDoTask);
    };
    const addChecklistTask = (toDoTask, newChecklistTask) => {
        return toDoTask.addTask(newChecklistTask);
    };
    return { addTab, addToDoTask, addChecklistTask };
})();

export { DOMControllerAdd };