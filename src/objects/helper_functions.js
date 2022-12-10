import { toDoList } from "./todo_list_object";

const helperFunctions = (() => {
    const getTabIndex = (event) => {
        const tabElement = ensureCorrectTabElement(event);
        const tabIndex = tabElement.dataset.tabIndex;
        return tabIndex;
    };
    const getTabObject = (tabIndex) => {
        const tabObject = toDoList.getSpecificChecklistTask(tabIndex);
        return tabObject;
    };
    const getTabElement = (tabIndex) => {
        const tabElement = document.querySelector(`[data-tab-index='${tabIndex}']`);
        return tabElement;
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
        const toDoTabSection = document.querySelector(".tab-section");
        const toDoTabs = Array.from(toDoTabSection.querySelectorAll(".tab-title"));
        if (toDoTabs.length === 1) {
            return true;
        } else {
            return false;
        };
    };
    const checkIfNoMoreTabs = () => {
        const toDoTabSection = document.querySelector(".tab-section");
        const toDoTabs = Array.from(toDoTabSection.querySelectorAll(".tab-title"));
        if (toDoTabs.length === 0) {
            return true;
        } else {
            return false;
        };
    };
    const getTaskIndex = (event) => {
        const taskElement = ensureCorrectTaskElement(event);
        const taskIndex = taskElement.dataset.taskIndex;
        return taskIndex;
    };
    const getTaskObject = (tabIndex, taskIndex) => {
        const tabObject = getTabObject(tabIndex);
        const taskObject = tabObject.getSpecificChecklistTask(taskIndex);
        return taskObject;
    };
    const getTaskElement = (taskIndex) => {
        const taskElement = document.querySelector(`[data-task-index='${taskIndex}']`);
        return taskElement;
    }
    const getTaskSubcontainerType = (event) => {
        const taskSubcontainerElement = ensureCorrectTaskSubcontainerElement(event);
        const taskSubcontainerElementClasses = Array.from(taskSubcontainerElement.classList);
        let taskSubcontainerType = undefined;
        if (taskSubcontainerElementClasses.includes("task-title-section")) {
            taskSubcontainerType = "Title";
        } else if (taskSubcontainerElementClasses.includes("task-due-date-section")) {
            taskSubcontainerType = "Due Date";
        } else if (taskSubcontainerElementClasses.includes("task-description-section")) {
            taskSubcontainerType = "Description";
        } else if (taskSubcontainerElementClasses.includes("task-notes-section")) {
            taskSubcontainerType = "Notes";
        };
        return taskSubcontainerType;
    };
    const getTaskSubcontainerElement = (taskIndex, buttonType) => {
        const taskElement = getTaskElement(taskIndex);
        let taskSubcontainerElement = undefined;
        if (buttonType === "Title") {
            taskSubcontainerElement = taskElement.querySelector(".task-title-section");
        } else if (buttonType === "Due Date") {
            taskSubcontainerElement = taskElement.querySelector(".task-due-date-section");
        } else if (buttonType === "Description") {
            taskSubcontainerElement = taskElement.querySelector(".task-description-section");
        } else if (buttonType === "Notes") {
            taskSubcontainerElement = taskElement.querySelector(".task-notes-section");
        };
        return taskSubcontainerElement;
    };
    const getChecklistTaskIndex = (event) => {
        const checklistTaskElement = ensureCorrectChecklistTaskElement(event);
        const checklistTaskIndex = checklistTaskElement.dataset.checklistTaskIndex;
        return checklistTaskIndex;
    };
    const getChecklistTaskObject = (tabIndex, taskIndex, checklistTaskIndex) => {
        const taskObject = getTaskObject(tabIndex, taskIndex);
        const checklistTaskObject = taskObject.getSpecificChecklistTask(checklistTaskIndex);
        return checklistTaskObject;
    }
    const getChecklistTaskElement = (taskIndex, checklistTaskIndex) => {
        const taskElement = getTaskElement(taskIndex);
        const checklistTaskElement = taskElement.querySelector(`[data-checklist-task-index='${checklistTaskIndex}']`);
        return checklistTaskElement;
    }
    const getNewValue = (event) => {
        const newValue = event.target.value;
        return newValue;
    };
    const checkForExistingInputElement = (event, elementType) => {
        let inputElement = undefined;
        if (elementType === "Tab") {
            const tabElement = ensureCorrectTabElement(event);
            inputElement = tabElement.querySelector(".tab-name-input");
        } else if (elementType === "Task") {
            const taskSubcontainerElement = ensureCorrectTaskSubcontainerElement(event);
            inputElement = taskSubcontainerElement.querySelector(".task-input");
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
    const tryingToDoubleClick = (taskIndex) => {
        const taskElement = getTaskElement(taskIndex);
        const taskClasses = Array.from(taskElement.classList);
        if (taskClasses.includes("mid-animation")) {
            return true;
        } else {
            return false;
        };
    };
    const ensureCorrectTabElement = (event) => {
        let tabElement = event.target.parentElement;
        while (tabElement.getAttribute("class") !== "tab-title") {
            tabElement = tabElement.parentElement;
        };
        return tabElement;
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
    const ensureCorrectTaskSubcontainerElement = (event) => {
        let taskSubcontainerElement = event.target.parentElement;
        let classList = Array.from(taskSubcontainerElement.classList)
        while (!classList.includes("to-do-task-subcontainer")) {
            taskSubcontainerElement = taskSubcontainerElement.parentElement;
            classList = Array.from(taskSubcontainerElement.classList)
        }
        return taskSubcontainerElement;
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
    return {
        getTabIndex,
        getTabObject,
        getTabElement,
        checkIfWasCurrentTab,
        checkIfOnlyOneTab,
        checkIfNoMoreTabs,
        getTaskIndex,
        getTaskObject,
        getTaskElement,
        getTaskSubcontainerType,
        getTaskSubcontainerElement,
        getChecklistTaskIndex,
        getChecklistTaskObject,
        getChecklistTaskElement,
        getNewValue,
        checkForExistingInputElement,
        tryingToDoubleClick,
    };
})();

export { helperFunctions };