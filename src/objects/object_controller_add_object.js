import { toDoList } from "./todo_list_object";
import { toDoTab } from "./todo_tab_object";
import { titleBehaviorComponent } from "../components/title_component";
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";

const objectControllerAddObject = (() => {
    const addNewTabToTodoArray = () => {
        const newTab = toDoTab("New Tab");
        return toDoList.addTask(newTab);
    }
    return { addNewTabToTodoArray, };
})();

export { objectControllerAddObject };