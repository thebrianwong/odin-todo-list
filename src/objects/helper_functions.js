import { toDoList } from "./todo_list_object";

const helperFunctions = (() => {
    const ensureCorrectTabElement = (event) => {
        let tabElement = event.target.parentElement;
        while (tabElement.getAttribute("class") !== "tab-title") {
            tabElement = tabElement.parentElement;
        };
        return tabElement;
    };
    const checkForTabInputElement = (event) => {
        const tabElement = ensureCorrectTabElement(event);
        if (tabElement.firstElementChild.tagName === "INPUT") {
            return true;
        } else {
            return false;
        };
    };
    const checkIfWasCurrentTab = (event) => {
        const tabElement = ensureCorrectTabElement(event);
        if (tabElement.getAttribute("id") === "current-tab") {
            return true;
        } else {
            return false;
        };
    };
    const checkIfOnlyOneTab = () => {
        const toDoTabSection = document.querySelector(".to-do-tab-section");
        const toDoTabs = Array.from(toDoTabSection.querySelectorAll(".tab-title"));
        if (toDoTabs.length === 1) {
            return true;
        } else {
            return false;
        };
    };
    const ensureCorrectTaskElement = (event) => {
        let taskElement = event.target.parentElement;
        let classList = Array.from(taskElement.classList);
        while (!classList.includes("to-do-task")) {
            taskElement = taskElement.parentElement;
            classList = Array.from(taskElement.classList);
        };
        return taskElement;
    }
    const ensureCorrectSubcontainer = (event) => {
        let taskSubcontainer = event.target.parentElement;
        let classList = Array.from(taskSubcontainer.classList)
        while (!classList.includes("to-do-task-subcontainer")) {
            taskSubcontainer = taskSubcontainer.parentElement;
            classList = Array.from(taskSubcontainer.classList)
        }
        return taskSubcontainer;
    };
    const checkForTaskSubcontainerInputElement = (event) => {
        const taskSubcontainer = ensureCorrectSubcontainer(event);
        if (taskSubcontainer.firstElementChild.tagName === "INPUT") {
            return true;
        } else {
            return false;
        };
    };
    const getTargetTaskObject = (event) => {
        const taskElement = ensureCorrectTaskElement(event);
        const index = taskElement.dataset.taskIndex;
        const currentTabIndex = toDoList.getCurrentTabIndex();
        const currentTabObject = toDoList.getSpecificChecklistTask(currentTabIndex);
        const taskObject = currentTabObject.getSpecificChecklistTask(index);
        return taskObject;
    };
    const ensureCorrectButtonElement = (event) => {
        let buttonElement = event.target;
        while (buttonElement.tagName !== "BUTTON") {
            buttonElement = buttonElement.parentElement;
        };
        return buttonElement;
    };
    const getSubcontainerType = (event) => {
        const taskSubcontainer = ensureCorrectSubcontainer(event);
        const subcontainerClasses = Array.from(taskSubcontainer.classList);
        return subcontainerClasses;
    };
    const ensureCorrectChecklistElement = (event) => {
        let checklistElement = event.target;
        let classList = Array.from(checklistElement.classList);
        while (!classList.includes("checklist")) {
            checklistElement = checklistElement.parentElement;
            classList = Array.from(checklistElement.classList);
        };
        return checklistElement;
    };
    const ensureCorrectChecklistTaskElement = (event) => {
        let checklistTaskElement = event.target;
        let classList = Array.from(checklistTaskElement.classList);
        while (!classList.includes("checklist-task")) {
            checklistTaskElement = checklistTaskElement.parentElement;
            classList = Array.from(checklistTaskElement.classList);
        };
        return checklistTaskElement;
    }
    const checkForChecklistTaskInputElement = (event) => {
        const checklistTaskElement = ensureCorrectChecklistTaskElement(event);
        const checklistCompleteSection = checklistTaskElement.querySelector(".checklist-complete-section");
        const inputElement = checklistCompleteSection.querySelector(".checklist-input");
        if (inputElement !== null) {
            return true;
        } else {
            return false;
        };
    };
    const getTargetChecklistTaskObject = (event) => {
        const taskObject = getTargetTaskObject(event);
        const checklistTaskElement = ensureCorrectChecklistTaskElement(event);
        const checklistTaskIndex = checklistTaskElement.dataset.checklistTaskIndex;
        const checklistTaskObject = taskObject.getSpecificChecklistTask(checklistTaskIndex);
        return checklistTaskObject;
    };
    const getTaskIndex = (event) => {
        const taskElement = ensureCorrectTaskElement(event);
        const taskIndex = taskElement.dataset.taskIndex;
        return taskIndex;
    };
    const getChecklistTaskIndex = (event) => {
        const checklistTaskElement = ensureCorrectChecklistTaskElement(event);
        const checklistTaskIndex = checklistTaskElement.dataset.checklistTaskIndex;
        return checklistTaskIndex;
    };
    const getTabIndex = (event) => {
        const tabElement = ensureCorrectTabElement(event);
        const tabIndex = tabElement.dataset.tabIndex;
        return tabIndex;
    };
    const getNewValue = (event) => {
        const newValue = event.target.value;
        return newValue;
    };
    const getButtonType = (event) => {
        const buttonElement = ensureCorrectButtonElement(event);
        const buttonClasses = Array.from(buttonElement.classList);
        let buttonType = undefined;
        if (buttonClasses.includes("edit-task-title")) {
            buttonType = "Title";
        } else if (buttonClasses.includes("edit-task-due-date")) {
            buttonType = "Due Date";
        } else if (buttonClasses.includes("edit-task-description")) {
            buttonType = "Description";
        } else if (buttonClasses.includes("edit-task-notes")) {
            buttonType = "Notes";
        };
        return buttonType;
    };
    const getTaskSubcontainerElement = (taskIndex, buttonType) => {
        const taskElement = document.querySelector(`[data-task-index='${taskIndex}']`);
        let taskSubcontainerElement = undefined;
        if (buttonType === "Title") {
            taskSubcontainerElement = taskElement.querySelector(".to-do-title-section");
        } else if (buttonType === "Due Date") {
            taskSubcontainerElement = taskElement.querySelector(".to-do-due-date-section");
        } else if (buttonType === "Description") {
            taskSubcontainerElement = taskElement.querySelector(".to-do-description-section");
        } else if (buttonType === "Notes") {
            taskSubcontainerElement = taskElement.querySelector(".to-do-notes-section");
        };
        return taskSubcontainerElement;
    };
    return { ensureCorrectTabElement, checkForTabInputElement, checkIfWasCurrentTab,
        checkIfOnlyOneTab, ensureCorrectTaskElement, ensureCorrectSubcontainer,
        checkForTaskSubcontainerInputElement, getTargetTaskObject, ensureCorrectButtonElement, getSubcontainerType, ensureCorrectChecklistElement,
        ensureCorrectChecklistTaskElement, checkForChecklistTaskInputElement,
        getTargetChecklistTaskObject, getTaskIndex, getChecklistTaskIndex, getTabIndex, getNewValue, getButtonType, getTaskSubcontainerElement, };
})();

export { helperFunctions };