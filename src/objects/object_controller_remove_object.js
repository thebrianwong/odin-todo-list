import { toDoList } from "./todo_list_object";
import { toDoTab } from "./todo_tab_object";
import { DOMControllerAddEdit } from "./DOM_controller_add_edit";
import { helperFunctions } from "./helper_functions";

const objectControllerRemoveObject = (() => {
    const removeTabFromTodoArray = (event) => {
        const tabElement = helperFunctions.ensureCorrectTabElement(event);
        const index = tabElement.dataset.tabIndex;
        toDoList.removeTask(index);
    };
    const removeTaskFromTabArray = (event) => {
        const taskElement = helperFunctions.ensureCorrectTaskElement(event);
        const index = taskElement.dataset.taskIndex;
        const currentTabIndex = toDoList.getCurrentTabIndex();
        const currentTabObject = toDoList.getSpecificChecklistTask(currentTabIndex);
        currentTabObject.removeTask(index);
    }
    return { removeTabFromTodoArray, removeTaskFromTabArray};
})();

export { objectControllerRemoveObject };