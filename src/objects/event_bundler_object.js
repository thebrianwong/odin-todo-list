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
    const addTab = (event, tabName="New Tab") => {
        const newTabIndex = objectControllerAddEditObject.addNewTabToTodoArray(tabName);
        const newTabNode = DOMControllerAddEdit.addNewTabToDOM(newTabIndex);
        addTabListeners(newTabNode);
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
            const tabElement = DOMControllerAddEdit.insertTabNameElement(event);
            DOMControllerRemove.removeTabInputElement(event);
            eventAssigner.addSwitchTabListener(tabElement);
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
        if (!helperFunctions.checkIfWasCurrentTab(event)) {
            objectControllerAddEditObject.updateCurrentTab(event);
            DOMControllerRemove.resetCurrentTabStatus();
            DOMControllerAddEdit.setCurrentTabDOM(event);
            DOMControllerRemove.removeAllTaskElements();
            DOMControllerAddEdit.loadTasksFromNewCurrentTab();
        };
    }
    const newTask = (event, title="New Task Title", dueDate="Task Due Date", description="Task Description", notes="Task Notes") => {
        const newTaskIndex = objectControllerAddEditObject.addNewTaskToTab(title, dueDate, description, notes);
        const newTaskNode = DOMControllerAddEdit.addNewTaskToDOM(newTaskIndex);
        addTaskListeners(newTaskNode);
        return newTaskIndex;
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
        addChecklistTaskListeners(newChecklistTaskNode);
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
    const toggleTaskPin = (event) => {
        objectControllerAddEditObject.toggleTaskPin(event);
        DOMControllerAddEdit.changePinButtonImage(event);
        DOMControllerAddEdit.shiftTaskElementPosition(event);
    };
    // const loadTasksFromNewCurrentTab = () => {
    //     for (const task )
    // };
    const addTaskListeners = (newTaskNode) => {
        eventAssigner.addRemoveTaskButtonListener(newTaskNode);
        eventAssigner.addEditTaskListeners(newTaskNode);
        eventAssigner.addToggleTaskCompleteListener(newTaskNode);
        eventAssigner.addNewChecklistTaskListener(newTaskNode);
        eventAssigner.addToggleTaskPinListeners(newTaskNode);
        eventAssigner.addToggleDisplayTaskDetailsListeners(newTaskNode);
    };
    const addChecklistTaskListeners = (newChecklistTaskNode) => {
        eventAssigner.addEditChecklistTaskListeners(newChecklistTaskNode);
        eventAssigner.addToggleChecklistTaskCompleteListener(newChecklistTaskNode);
        eventAssigner.addRemoveChecklistTaskListener(newChecklistTaskNode);
    };
    const toggleDisplayTaskDetails = (event) => {
        DOMControllerAddEdit.toggleDisplayTaskDetails(event);
        DOMControllerAddEdit.rotateChevronButton(event);
    };
    const addTabListeners = (newTabNode) => {
        eventAssigner.addEditTabButtonListener(newTabNode);
        eventAssigner.addRemoveTabButtonListener(newTabNode);
        eventAssigner.addSwitchTabListener(newTabNode);
    };
    const loadInitialPage = () => {
        addTab(event, "Instructions");
        const taskIndex = newTask(event, "test title", "test due date", "test description", "test notes");
        addInstructionsChecklistTask(taskIndex);
    };
    const addInstructionsChecklistTask = (taskIndex) => {
        const checklistTaskIndex = objectControllerAddEditObject.addInstructionsChecklistTaskObject(taskIndex);
        const checklistTaskNode = DOMControllerAddEdit.loadInstructionsChecklistTaskElement(taskIndex, checklistTaskIndex);
        addChecklistTaskListeners(checklistTaskNode);
    };
    return { addTab, insertTabInputElement, updateTab, removeTab, switchTab,
        newTask, removeTask, insertTaskInputElement, updateTask, toggleTaskComplete, addNewChecklistTask, insertChecklistTaskInputElement, updateChecklistTask, toggleChecklistTaskComplete, removeChecklistTask, toggleTaskPin, addTaskListeners, addChecklistTaskListeners, toggleDisplayTaskDetails, addTabListeners, loadInitialPage, };
})();

export { eventBundler };