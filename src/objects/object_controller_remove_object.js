import { toDoList } from "./todo_list_object";
import { toDoTab } from "./todo_tab_object";
import { DOMControllerAddEdit } from "./DOM_controller_add_edit";
import { helperFunctions } from "./helper_functions";

const objectControllerRemoveObject = (() => {
    const removeTabFromTodoArray = (tabIndex) => {
        toDoList.removeTask(tabIndex);
    };
    const removeTaskFromTabArray = (event) => {
        const taskElement = helperFunctions.ensureCorrectTaskElement(event);
        const index = taskElement.dataset.taskIndex;
        const currentTabObject = toDoList.getCurrentTabObject();
        currentTabObject.removeTask(index);
    }
    const removeChecklistTaskFromTaskArray = (event) => {
        const checklistTaskElement = helperFunctions.ensureCorrectChecklistTaskElement(event);
        const index = checklistTaskElement.dataset.checklistTaskIndex;
        const currentTaskObject = helperFunctions.getTargetTaskObject(event);
        currentTaskObject.removeTask(index);
    };
    return { removeTabFromTodoArray, removeTaskFromTabArray, removeChecklistTaskFromTaskArray, };
})();

export { objectControllerRemoveObject };