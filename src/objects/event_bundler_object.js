import { toDoList } from "./todo_list_object";
import { toDoTab } from "./todo_tab_object";
import { titleBehaviorComponent } from "../components/title_component";
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";
import { objectControllerAddObject } from "./object_controller_add_object";
import { DOMUpdateController } from "./DOM_update_controller";
import { eventAssigner } from "./event_assigner_object";

const eventBundler = (() => {
    // ignore for now start
    const determineEvent = (node, indicator) => {
        switch (indicator) {
            case "add-tab":
                const addTab = () => {
                    console.log(toDoList.getChecklistTasks())

                    objectControllerAddObject.addNewTabToTodoArray();
                    DOMUpdateController.addNewTabToDOM()

                    console.log(toDoList.getChecklistTasks())
                }
                return addTab
                break;
            case "edit-tab":

                break;
            case "remove-tab":

                break;
            case "new-tab-name":

                break;
            case "add-task":

                break;
            case "remove-task":

                break;
            case "pin-task":

                break;
            case "toggle-task-complete":

                break;
            case "edit-task-title":

                break;
            case "new-task-title":

                break;
            case "edit-task-due-date":

                break;
            case "new-task-due-date":

                break;
            case "edit-task-description":

                break;
            case "new-task-description":

                break;
            case "edit-task-notes":

                break;
            case "new-task-notes":

                break;
            case "add-checklist-task":

                break;
            case "toggle-checklist-task-complete":

                break;
            case "edit-checklist-task-description":

                break;
            case "new-checklist-task-description":

                break;
            case "remove-checklist-task":

                break;
            default:
                break;
        };
    };
    const addKeyDownListener = (node, indicator) => {
        const action = determineEvent(node, indicator);
        node.addEventListener("keydown", action);
    };
    const addClickListener = (node, indicator) => {
        const action = determineEvent(node, indicator);
        node.addEventListener("click", action);
    };
    // ignore for now end
    const addTab = () => {
        const newTabIndex = objectControllerAddObject.addNewTabToTodoArray();
        DOMUpdateController.addNewTabToDOM(newTabIndex)
    }
    const editTab = (event) => {
        if (event.code === "Enter") {
            objectControllerAddObject.editTabName(event);
            DOMUpdateController.editTabNameDOM(event)
        }
    }
    const insertTabInputElement = (event) => {
        if (!DOMUpdateController.checkForTabInputElement(event)) {
            DOMUpdateController.removeTabNameElement(event);
            const inputElement = DOMUpdateController.insertTabInputElement(event);
            DOMUpdateController.setInputElementValue(event, inputElement);
            eventAssigner.addTabInputListener(inputElement);
        };
    }
    const updateTab = (event) => {
        if (event.code === 'Enter') {
            objectControllerAddObject.editTabName(event);
            DOMUpdateController.removeTabInputElement(event);
        };
    };
    return { addTab, editTab, insertTabInputElement, updateTab, };
})();

export { eventBundler };