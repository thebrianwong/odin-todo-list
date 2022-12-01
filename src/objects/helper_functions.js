import { toDoList } from "./todo_list_object";

const helperFunctions = (() => {
    const ensureCorrectTabElement = (event) => {
        let tabElement = event.target.parentElement;
        while (tabElement.getAttribute("class") !== "tab-title") {
            tabElement = tabElement.parentElement;
        };
        return tabElement;
    };
    const checkForExistingInputElement = (event, elementType) => {
        let inputElement = undefined;
        if (elementType === "Tab") {
            const tabElement = ensureCorrectTabElement(event);
            inputElement = tabElement.querySelector(".tab-name-input");
        } else if (elementType === "Task") {
            const taskSubcontainer = ensureCorrectSubcontainer(event);
            inputElement = taskSubcontainer.querySelector(".task-input");
        } else if (elementType === "Checklist Task") {
            const checklistTaskElement = ensureCorrectChecklistTaskElement(event);
            const checklistCompleteSection = checklistTaskElement.querySelector(".checklist-complete-section");
            inputElement = checklistCompleteSection.querySelector(".checklist-input");
        };
        if (inputElement !== null) {
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
    };
    const ensureCorrectSubcontainer = (event) => {
        let taskSubcontainer = event.target.parentElement;
        let classList = Array.from(taskSubcontainer.classList)
        while (!classList.includes("to-do-task-subcontainer")) {
            taskSubcontainer = taskSubcontainer.parentElement;
            classList = Array.from(taskSubcontainer.classList)
        }
        return taskSubcontainer;
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
        const buttonElement = ensureCorrectSubcontainer(event);
        const buttonClasses = Array.from(buttonElement.classList);
        let buttonType = undefined;
        if (buttonClasses.includes("to-do-title-section")) {
            buttonType = "Title";
        } else if (buttonClasses.includes("to-do-due-date-section")) {
            buttonType = "Due Date";
        } else if (buttonClasses.includes("to-do-description-section")) {
            buttonType = "Description";
        } else if (buttonClasses.includes("to-do-notes-section")) {
            buttonType = "Notes";
        };
        return buttonType;
    };
    const getTaskSubcontainerElement = (taskIndex, buttonType) => {
        const taskElement = getTaskElement(taskIndex);
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
    const getTaskElement = (taskIndex) => {
        const taskElement = document.querySelector(`[data-task-index='${taskIndex}']`);
        return taskElement;
    }
    const getChecklistTaskElement = (taskIndex, checklistTaskIndex) => {
        const taskElement = getTaskElement(taskIndex);
        const checklistTaskElement = taskElement.querySelector(`[data-checklist-task-index='${checklistTaskIndex}']`);
        return checklistTaskElement;
    }
    const getTabElement = (tabIndex) => {
        const tabElement = document.querySelector(`[data-tab-index='${tabIndex}']`);
        return tabElement;
    };
    return { checkIfWasCurrentTab, checkIfOnlyOneTab, getTaskIndex,
        getChecklistTaskIndex, getTabIndex, getNewValue, getButtonType,
        getTaskSubcontainerElement, getTaskElement, getChecklistTaskElement,
        getTabElement, checkForExistingInputElement, };
})();

export { helperFunctions };