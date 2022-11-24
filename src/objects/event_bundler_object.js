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
            DOMControllerAddEdit.setTabInputElementValue(event, inputElement);
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
    const newTask = () => {
        const newTaskIndex = objectControllerAddEditObject.addNewTaskToTab();
        const newTaskNode = DOMControllerAddEdit.addNewTaskToDOM(newTaskIndex);
        eventAssigner.addRemoveTaskButtonListenerForNewTasks(newTaskNode);
        eventAssigner.addEditTaskTitleListenerForNewTasks(newTaskNode);
        eventAssigner.addToggleTaskCompleteListenerForNewTasks(newTaskNode);
        eventAssigner.addNewChecklistTaskListenerForNewTasks(newTaskNode);
    }
    const removeTask = (event) => {
        objectControllerRemoveObject.removeTaskFromTabArray(event);
        DOMControllerRemove.removeTaskElementFromDOM(event);
    };
    const insertTaskInputElement = (event) => {
        if (!helperFunctions.checkForTaskSubcontainerInputElement(event)) {
            DOMControllerRemove.removeTaskSubcontentElementFromDOM(event);
            const inputElement = DOMControllerAddEdit.insertTaskInputElement(event);
            DOMControllerAddEdit.setTaskInputElementValue(event, inputElement);
            eventAssigner.addTaskInputListener(inputElement);
        };
    }
    const updateTask = (event) => {
        if (event.code === "Enter") {
            objectControllerAddEditObject.editTaskObjectInfo(event);
            DOMControllerAddEdit.insertTaskSubcontentElement(event);
            DOMControllerRemove.removeTaskInputElement(event);
        };
    };
    const toggleTaskComplete = (event) => {
        objectControllerAddEditObject.toggleTaskComplete(event);
        DOMControllerAddEdit.toggleTaskDOMComplete(event);
    };
    const addNewChecklistTask = (event) => {
        const newChecklistTaskIndex = objectControllerAddEditObject.addNewChecklistTaskToTask(event);
        const newChecklistTaskNode = DOMControllerAddEdit.addNewChecklistTaskToDOM(event, newChecklistTaskIndex);
        eventAssigner.addEditChecklistTaskListenersForNewChecklistTasks(newChecklistTaskNode);
        eventAssigner.addToggleChecklistTaskCompleteListenerForNewChecklistTasks(newChecklistTaskNode);
        eventAssigner.addRemoveChecklistTaskListenerForInitialTabs(newChecklistTaskNode);
    };
    const insertChecklistTaskInputElement = (event) => {
        if (!helperFunctions.checkForChecklistTaskInputElement(event)) {
            DOMControllerRemove.removeChecklistTaskDescriptionDOM(event);
            const inputElement = DOMControllerAddEdit.insertChecklistTaskInputElement(event);
            DOMControllerAddEdit.setChecklistTaskInputElementValue(event, inputElement);
            eventAssigner.addChecklistTaskInputListener(inputElement);
        };
    };
    const updateChecklistTask = (event) => {
        if (event.code === "Enter") {
            objectControllerAddEditObject.editChecklistTaskDescription(event);
            DOMControllerAddEdit.insertChecklistTaskDescriptionElement(event);
            DOMControllerRemove.removeChecklistTaskInputElement(event);
        };
    };
    const toggleChecklistTaskComplete = (event) => {
        objectControllerAddEditObject.toggleChecklistTaskComplete(event);
        DOMControllerAddEdit.toggleChecklistTaskDOMComplete(event);
    };
    const removeChecklistTask = (event) => {
        objectControllerRemoveObject.removeChecklistTaskFromTaskArray(event);
        DOMControllerRemove.removeChecklistTaskElementDOM(event);
    };
    return { addTab, insertTabInputElement, updateTab, removeTab, switchTab,
        newTask, removeTask, insertTaskInputElement, updateTask, toggleTaskComplete, addNewChecklistTask, insertChecklistTaskInputElement, updateChecklistTask, toggleChecklistTaskComplete, removeChecklistTask, };
})();

export { eventBundler };