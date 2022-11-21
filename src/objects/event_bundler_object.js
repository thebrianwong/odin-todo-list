import { toDoList } from "./todo_list_object";
import { toDoTab } from "./todo_tab_object";
import { titleBehaviorComponent } from "../components/title_component";
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";
import { objectControllerAddEditObject } from "./object_controller_add_edit_object";
import { DOMUpdateController } from "./DOM_update_controller";
import { eventAssigner } from "./event_assigner_object";
import { objectControllerRemoveObject } from "./object_controller_remove_object";
import { helperFunctions } from "./helper_functions";

const eventBundler = (() => {
    const addTab = () => {
        const newTabIndex = objectControllerAddEditObject.addNewTabToTodoArray();
        const newTabNode = DOMUpdateController.addNewTabToDOM(newTabIndex);
        eventAssigner.addEditTabButtonListenerForNewTabs(newTabNode);
        eventAssigner.addRemoveTabButtonListenerForNewTabs(newTabNode);
    }
    const insertTabInputElement = (event) => {
        if (!helperFunctions.checkForTabInputElement(event)) {
            const inputElement = DOMUpdateController.insertTabInputElement(event);
            DOMUpdateController.removeTabNameElement(event);
            DOMUpdateController.setInputElementValue(event, inputElement);
            eventAssigner.addTabInputListener(inputElement);
        };
    }
    const updateTab = (event) => {
        if (event.code === 'Enter') {
            objectControllerAddEditObject.editTabName(event);
            DOMUpdateController.insertTabNameElement(event);
            DOMUpdateController.removeTabInputElement(event);
        };
    };
    const removeTab = (event) => {
        objectControllerRemoveObject.removeTabFromTodoArray(event);
        DOMUpdateController.removeTabElementFromDOM(event);
    };
    return { addTab, insertTabInputElement, updateTab, removeTab, };
})();

export { eventBundler };