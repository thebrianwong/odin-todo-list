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
            const tabIndex = helperFunctions.getTabIndex(event);
            const inputElement = DOMControllerAddEdit.insertTabInputElement(tabIndex);
            DOMControllerRemove.removeTabNameElement(tabIndex);
            DOMControllerAddEdit.setTabInputElementValue(tabIndex);
            eventAssigner.addTabInputListener(inputElement);
        };
    }
    const updateTab = (event) => {
        if (event.code === 'Enter') {
            const tabIndex = helperFunctions.getTabIndex(event);
            const newTabName = helperFunctions.getNewValue(event);
            objectControllerAddEditObject.editTabName(tabIndex, newTabName);
            const tabElement = DOMControllerAddEdit.insertTabNameElement(tabIndex);
            DOMControllerRemove.removeTabInputElement(tabIndex);
            eventAssigner.addSwitchTabListener(tabElement);
        };
    };
    const removeTab = (event) => {
        const tabIndex = helperFunctions.getTabIndex(event);
        objectControllerRemoveObject.removeTabFromTodoArray(tabIndex);
        DOMControllerRemove.removeTabElementFromDOM(tabIndex);
        if (helperFunctions.checkIfWasCurrentTab(event)) {
            const firstTabIndex = objectControllerAddEditObject.setFirstTabToCurrentTab();
            DOMControllerAddEdit.setFirstTabToCurrentTab(firstTabIndex)
        }
    };
    const switchTab = (event) => {
        if (!helperFunctions.checkIfWasCurrentTab(event)) {
            const tabIndex = helperFunctions.getTabIndex(event);
            objectControllerAddEditObject.updateCurrentTab(tabIndex);
            DOMControllerRemove.resetCurrentTabStatus();
            DOMControllerAddEdit.setCurrentTabDOM(tabIndex);
            DOMControllerRemove.removeAllTaskElements();
            DOMControllerAddEdit.loadTasksFromNewCurrentTab();
        };
    }
    const newTask = (event, title="New Task Title", dueDate="Task Due Date", description="Task Description", notes="Task Notes", pinned=false, completed=false) => {
        const newTaskIndex = objectControllerAddEditObject.addNewTaskToTab(title, dueDate, description, notes, pinned, completed);
        const newTaskNode = DOMControllerAddEdit.addNewTaskToDOM(newTaskIndex);
        addTaskListeners(newTaskNode);
        return newTaskIndex;
    }
    const removeTask = (event) => {
        const taskIndex = helperFunctions.getTaskIndex(event);
        objectControllerRemoveObject.removeTaskFromTabArray(taskIndex);
        DOMControllerRemove.removeTaskElementFromDOM(taskIndex);
    };
    const insertTaskInputElement = (event) => {
        if (!helperFunctions.checkForTaskSubcontainerInputElement(event)) {
            const taskIndex = helperFunctions.getTaskIndex(event);
            const buttonType = helperFunctions.getButtonType(event);
            DOMControllerRemove.removeTaskSubcontentElementFromDOM(taskIndex, buttonType);
            const inputElement = DOMControllerAddEdit.insertTaskInputElement(taskIndex, buttonType);
            DOMControllerAddEdit.setTaskInputElementValue(taskIndex, buttonType);
            eventAssigner.addTaskInputListener(inputElement);
        };
    }
    const updateTask = (event) => {
        if (event.code === "Enter") {
            const taskIndex = helperFunctions.getTaskIndex(event);
            const buttonType = helperFunctions.getButtonType(event);
            const newTaskSubcontentValue = helperFunctions.getNewValue(event);
            objectControllerAddEditObject.editTaskObjectInfo(taskIndex, buttonType, newTaskSubcontentValue);
            DOMControllerAddEdit.insertTaskSubcontentElement(taskIndex, buttonType);
            DOMControllerRemove.removeTaskInputElement(taskIndex, buttonType);
        };
    };
    const toggleTaskComplete = (event) => {
        const taskIndex = helperFunctions.getTaskIndex(event);
        objectControllerAddEditObject.toggleTaskComplete(taskIndex);
        DOMControllerAddEdit.toggleTaskDOMComplete(taskIndex);
    };
    const addNewChecklistTask = (event) => {
        const taskIndex = helperFunctions.getTaskIndex(event);
        const newChecklistTaskIndex = objectControllerAddEditObject.addNewChecklistTaskToTask(taskIndex);
        const newChecklistTaskNode = DOMControllerAddEdit.addNewChecklistTaskToDOM(taskIndex, newChecklistTaskIndex);
        addChecklistTaskListeners(newChecklistTaskNode);
    };
    const insertChecklistTaskInputElement = (event) => {
        if (!helperFunctions.checkForChecklistTaskInputElement(event)) {
            const taskIndex = helperFunctions.getTaskIndex(event);
            const checklistTaskIndex = helperFunctions.getChecklistTaskIndex(event);
            DOMControllerRemove.removeChecklistTaskDescriptionDOM(taskIndex, checklistTaskIndex);
            const inputElement = DOMControllerAddEdit.insertChecklistTaskInputElement(taskIndex, checklistTaskIndex);
            DOMControllerAddEdit.setChecklistTaskInputElementValue(taskIndex, checklistTaskIndex);
            eventAssigner.addChecklistTaskInputListener(inputElement);
        };
    };
    const updateChecklistTask = (event) => {
        if (event.code === "Enter") {
            const taskIndex = helperFunctions.getTaskIndex(event);
            const checklistTaskIndex = helperFunctions.getChecklistTaskIndex(event);
            const newDescriptionValue = helperFunctions.getNewValue(event);
            objectControllerAddEditObject.editChecklistTaskDescription(taskIndex, checklistTaskIndex, newDescriptionValue);
            DOMControllerAddEdit.insertChecklistTaskDescriptionElement(taskIndex, checklistTaskIndex);
            DOMControllerRemove.removeChecklistTaskInputElement(taskIndex, checklistTaskIndex);
        };
    };
    const toggleChecklistTaskComplete = (event) => {
        const taskIndex = helperFunctions.getTaskIndex(event);
        const checklistTaskIndex = helperFunctions.getChecklistTaskIndex(event);
        objectControllerAddEditObject.toggleChecklistTaskComplete(taskIndex, checklistTaskIndex);
        DOMControllerAddEdit.toggleChecklistTaskDOMComplete(taskIndex, checklistTaskIndex);
    };
    const removeChecklistTask = (event) => {
        const taskIndex = helperFunctions.getTaskIndex(event);
        const checklistTaskIndex = helperFunctions.getChecklistTaskIndex(event);
        objectControllerRemoveObject.removeChecklistTaskFromTaskArray(taskIndex, checklistTaskIndex);
        DOMControllerRemove.removeChecklistTaskElementDOM(taskIndex, checklistTaskIndex);
    };
    const toggleTaskPin = (event) => {
        const taskIndex = helperFunctions.getTaskIndex(event);
        objectControllerAddEditObject.toggleTaskPin(taskIndex);
        DOMControllerAddEdit.changePinButtonImage(taskIndex);
        DOMControllerAddEdit.shiftTaskElementPosition(taskIndex);
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
        const taskIndex = newTask(event, "Quick Tips! Click the pin button to pin a task to the top of the list.",
            `Tomorrow, next week, or whenever your task is due, you can add it here!
            Click the arrow button to toggle between showing and hiding task details.`,
            "Add a description of your task here! Click the pencil buttons to edit the various parts of your task.",
            "Jot down some notes here! Mark your task as complete when you're done, or remove it from the list by clicking the X button.", true, true);
        DOMControllerAddEdit.toggleTaskDOMComplete(taskIndex);
        DOMControllerAddEdit.changePinButtonImage(taskIndex);
        DOMControllerAddEdit.shiftTaskElementPosition(taskIndex);
        addInstructionsChecklistTask(taskIndex);
    };
    const addInstructionsChecklistTask = (taskIndex) => {
        const instructions = [
            ["If your task has multiple steps, try breaking them down into a checklist! Click the plus sign button to add steps as needed.", true],
            ["Have a new task you want to keep track of? Add it to the list by clicking on the 'New Task' button below!", true],
            [`Organize the different types of tasks in your life by creating themed tabs. 
            Create a new tab by clicking on the plus sign button at the top of the list.
            Change tabs by clicking on different tab names.`, true]];
        instructions.forEach((instructionsItem) => {
            const checklistTaskIndex = objectControllerAddEditObject.addNewChecklistTaskToTask(taskIndex, instructionsItem[0], instructionsItem[1]);
            const checklistTaskNode = DOMControllerAddEdit.addNewChecklistTaskToDOM(taskIndex, checklistTaskIndex);
            DOMControllerAddEdit.toggleChecklistTaskDOMComplete(taskIndex, checklistTaskIndex);
            addChecklistTaskListeners(checklistTaskNode);
        })
    };
    return { addTab, insertTabInputElement, updateTab, removeTab, switchTab,
        newTask, removeTask, insertTaskInputElement, updateTask, toggleTaskComplete,
        addNewChecklistTask, insertChecklistTaskInputElement, updateChecklistTask,
        toggleChecklistTaskComplete, removeChecklistTask, toggleTaskPin, addTaskListeners,
        addChecklistTaskListeners, toggleDisplayTaskDetails, addTabListeners, loadInitialPage, };
})();

export { eventBundler };