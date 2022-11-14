import { toDoList } from "./todo_list_object"
import { containsChecklistBehaviorComponent } from "../components/contains_checklist_component";
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";

const DOMControllerAdd = (() => {
    const addTab = (newTab) => {
        // ???
        toDoList.addChecklist(newTab);
    };
    const addToDoTask = (tab, newToDoTask) => {
        tab.addChecklist(newToDoTask);
    };
    
})();