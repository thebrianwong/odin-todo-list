import { toDoList } from "./todo_list_object";
import { toDoTab } from "./todo_tab_object";
import { titleBehaviorComponent } from "../components/title_component";
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";
import { helperFunctions } from "./helper_functions";

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
    const updateCurrentTab = (event) => {
        const newCurrentTab = helperFunctions.ensureCorrectTabElement(event);
        const index = newCurrentTab.dataset.tabIndex;
        toDoList.setCurrentTab(index)
    }
    const setFirstTabToCurrentTab = () => {
        const tabArray = toDoList.getChecklistTasks();
        let firstTab = undefined;
        for (const tab in tabArray) {
            if (tabArray[tab] !== undefined) {
                toDoList.setCurrentTab(tab);
                firstTab = tab;
                return firstTab;
            }
        }
    };
    return { addNewTabToTodoArray, editTabName, updateCurrentTab, setFirstTabToCurrentTab };
})();

export { objectControllerAddEditObject };