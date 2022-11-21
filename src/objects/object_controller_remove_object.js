import { toDoList } from "./todo_list_object";
import { toDoTab } from "./todo_tab_object";
import { DOMUpdateController } from "./DOM_update_controller";
import { helperFunctions } from "./helper_functions";

const objectControllerRemoveObject = (() => {
    const removeTabFromTodoArray = (event) => {
        const tabElement = helperFunctions.ensureCorrectTabElement(event);
        const index = tabElement.dataset.tabIndex;
        toDoList.removeTask(index);
    };
    return { removeTabFromTodoArray, };
})();

export { objectControllerRemoveObject };