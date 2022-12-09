import { helperFunctions } from "./helper_functions";

const DOMControllerRemove = (() => {
    const removeTabNameElement = (tabIndex) => {
        const tabElement = helperFunctions.getTabElement(tabIndex);
        let switchTab = tabElement.querySelector(".switch-tab")
        tabElement.removeChild(switchTab);
        switchTab = null
    };
    const removeTabInputElement = (tabIndex) => {
        const tabElement = helperFunctions.getTabElement(tabIndex);
        let inputElement = tabElement.querySelector("input");
        tabElement.removeChild(inputElement);
        inputElement = null;
    };
    const resetCurrentTabStatus = () => {
        const currentTab = document.querySelector("#current-tab");
        if (currentTab !== null) {
            currentTab.removeAttribute("id");
        } else {
            return;
        };
    }
    const removeTabElementFromDOM = (tabIndex) => {
        let tabElement = helperFunctions.getTabElement(tabIndex);
        const toDoTabSection = document.querySelector(".tab-section");
        toDoTabSection.removeChild(tabElement);
        tabElement = null;
    };
    const removeTaskElementFromDOM = (taskIndex) => {
        let taskElement = helperFunctions.getTaskElement(taskIndex);
        const toDoTaskSection = document.querySelector(".content-section");
        toDoTaskSection.removeChild(taskElement);
        taskElement = null;
    }
    const removeTaskSubcontentElementFromDOM = (taskIndex, buttonType) => {
        const taskSubcontainerElement = helperFunctions.getTaskSubcontainerElement(taskIndex, buttonType);
        let taskSubcontentElement = taskSubcontainerElement.firstElementChild;
        taskSubcontainerElement.removeChild(taskSubcontentElement);
        taskSubcontentElement = null
    }
    const removeTaskInputElement = (taskIndex, buttonType) => {
        const taskSubcontainerElement = helperFunctions.getTaskSubcontainerElement(taskIndex, buttonType);
        let inputElement = taskSubcontainerElement.querySelector("input");
        taskSubcontainerElement.removeChild(inputElement);
        inputElement = null;
    }
    const removeChecklistTaskDescriptionDOM = (taskIndex, checklistTaskIndex) => {
        const checklistTaskElement = helperFunctions.getChecklistTaskElement(taskIndex, checklistTaskIndex);
        const checklistCompleteSection = checklistTaskElement.querySelector(".checklist-complete-section");
        let checklistTaskDescription = checklistTaskElement.querySelector(".checklist-task-description");
        checklistCompleteSection.removeChild(checklistTaskDescription);
        checklistTaskDescription = null;
    };
    const removeChecklistTaskInputElement = (taskIndex, checklistTaskIndex) => {
        const checklistTaskElement = helperFunctions.getChecklistTaskElement(taskIndex, checklistTaskIndex);
        const checklistCompleteSection = checklistTaskElement.querySelector(".checklist-complete-section");
        let inputElement = checklistCompleteSection.querySelector(".checklist-input");
        checklistCompleteSection.removeChild(inputElement);
        inputElement = null;
    };
    const removeChecklistTaskElementDOM = (taskIndex, checklistTaskIndex) => {
        const taskElement = helperFunctions.getTaskElement(taskIndex);
        const checklistElement = taskElement.querySelector(".checklist");
        let checklistTaskElement = helperFunctions.getChecklistTaskElement(taskIndex, checklistTaskIndex);
        checklistElement.removeChild(checklistTaskElement);
        checklistTaskElement = null;
    };
    const removeAllTaskElements = () => {
        const taskContentSection = document.querySelector(".content-section");
        taskContentSection.replaceChildren();
    };
    return {
        removeTabNameElement,
        removeTabInputElement,
        resetCurrentTabStatus,
        removeTabElementFromDOM,
        removeTaskElementFromDOM,
        removeTaskSubcontentElementFromDOM,
        removeTaskInputElement,
        removeChecklistTaskDescriptionDOM,
        removeChecklistTaskInputElement,
        removeChecklistTaskElementDOM,
        removeAllTaskElements
    }
})();

export { DOMControllerRemove };