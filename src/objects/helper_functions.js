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
        while (taskElement.getAttribute("class") !== "to-do-task") {
            taskElement = taskElement.parentElement;
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
    const getButtonType = (event) => {
        const buttonElement = ensureCorrectButtonElement(event);
        const buttonClasses = Array.from(buttonElement.classList);
        return buttonClasses;
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
        console.log(inputElement)
        if (inputElement !== null) {
            return true;
        } else {
            return false;
        };
    };
    return { ensureCorrectTabElement, checkForTabInputElement, checkIfWasCurrentTab,
        checkIfOnlyOneTab, ensureCorrectTaskElement, ensureCorrectSubcontainer,
        checkForTaskSubcontainerInputElement, getTargetTaskObject, ensureCorrectButtonElement,
        getButtonType, getSubcontainerType, ensureCorrectChecklistElement, ensureCorrectChecklistTaskElement, checkForChecklistTaskInputElement, };
})();

export { helperFunctions };