import { toDoList } from "./todo_list_object";
import { toDoTab } from "./todo_tab_object";
import { titleBehaviorComponent } from "../components/title_component";
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";

const objectControllerAddEditObject = (() => {
    const addNewTabToTodoArray = () => {
        const newTab = toDoTab("New Tab");
        return toDoList.addTask(newTab);
    }
    const editTabName = (event) => {
        const index = event.target.parentElement.dataset.tabIndex;
        const targetTab = toDoList.getSpecificChecklistTask(index);
        targetTab.setTaskTitle(event.target.value);
    }
    return { addNewTabToTodoArray, editTabName };
})();

export { objectControllerAddEditObject };