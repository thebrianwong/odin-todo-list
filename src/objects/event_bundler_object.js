import { toDoList } from "./todo_list_object";
import { toDoTab } from "./todo_tab_object";
import { titleBehaviorComponent } from "../components/title_component";
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";
import { objectControllerAddEditObject } from "./object_controller_add_edit_object";
import { DOMControllerAddEdit } from "./DOM_controller_add_edit";
import { eventAssigner } from "./event_assigner_object";
import { objectControllerRemoveObject } from "./object_controller_remove_object";
import { helperFunctions } from "./helper_functions";
import { DOMControllerRemove } from "./DOM_controller_remove";

const eventBundler = (() => {
    const addTab = () => {
        const newTabIndex = objectControllerAddEditObject.addNewTabToTodoArray();
        const newTabNode = DOMControllerAddEdit.addNewTabToDOM(newTabIndex);
        eventAssigner.addEditTabButtonListenerForNewTabs(newTabNode);
        eventAssigner.addRemoveTabButtonListenerForNewTabs(newTabNode);
        eventAssigner.addSwitchTabListenerForNewTabs(newTabNode);
        if (helperFunctions.checkIfOnlyOneTab()) {
            const firstTabIndex = objectControllerAddEditObject.setFirstTabToCurrentTab();
            DOMControllerAddEdit.setFirstTabToCurrentTab(firstTabIndex)
        };
    }
    const insertTabInputElement = (event) => {
        if (!helperFunctions.checkForTabInputElement(event)) {
            const inputElement = DOMControllerAddEdit.insertTabInputElement(event);
            DOMControllerRemove.removeTabNameElement(event);
            DOMControllerAddEdit.setInputElementValue(event, inputElement);
            eventAssigner.addTabInputListener(inputElement);
        };
    }
    const updateTab = (event) => {
        if (event.code === 'Enter') {
            objectControllerAddEditObject.editTabName(event);
            DOMControllerAddEdit.insertTabNameElement(event);
            DOMControllerRemove.removeTabInputElement(event);
        };
    };
    const removeTab = (event) => {
        objectControllerRemoveObject.removeTabFromTodoArray(event);
        DOMControllerRemove.removeTabElementFromDOM(event);
        if (helperFunctions.checkIfWasCurrentTab(event)) {
            const firstTabIndex = objectControllerAddEditObject.setFirstTabToCurrentTab();
            DOMControllerAddEdit.setFirstTabToCurrentTab(firstTabIndex)
        }
    };
    const switchTab = (event) => {
        objectControllerAddEditObject.updateCurrentTab(event);
        DOMControllerRemove.resetCurrentTabStatus();
        DOMControllerAddEdit.setCurrentTabDOM(event);
    }
    return { addTab, insertTabInputElement, updateTab, removeTab, switchTab, };
})();

export { eventBundler };