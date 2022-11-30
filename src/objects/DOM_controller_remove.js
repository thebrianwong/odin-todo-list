import { toDoList } from "./todo_list_object";
import { toDoTab } from "./todo_tab_object";
import { helperFunctions } from "./helper_functions";

const DOMControllerRemove = (() => {
    const removeTabNameElement = (tabIndex) => {
        const tabElement = document.querySelector(`[data-tab-index='${tabIndex}']`);
        let switchTab = tabElement.querySelector(".switch-tab")
        tabElement.removeChild(switchTab);
        switchTab = null
    };
    const removeTabInputElement = (tabIndex) => {
        const tabElement = document.querySelector(`[data-tab-index='${tabIndex}']`);
        let inputElement = tabElement.querySelector("input");
        tabElement.removeChild(inputElement);
        inputElement = null;
    };
    const removeTabElementFromDOM = (tabIndex) => {
        let tabElement = document.querySelector(`[data-tab-index='${tabIndex}']`);
        const toDoTabSection = document.querySelector(".to-do-tab-section");
        toDoTabSection.removeChild(tabElement);
        tabElement = null;
    };
    const resetCurrentTabStatus = () => {
        const currentTab = document.querySelector("#current-tab");
        if (currentTab !== null) {
            currentTab.removeAttribute("id");
        } else {
            return;
        };
    }
    const removeTaskElementFromDOM = (taskIndex) => {
        let taskElement = document.querySelector(`[data-task-index='${taskIndex}']`);
        const toDoTaskSection = document.querySelector(".to-do-content");
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
    const removeChecklistTaskInputElement = (event) => {
        const checklistTaskElement = helperFunctions.ensureCorrectChecklistTaskElement(event);
        const checklistCompleteSection = checklistTaskElement.querySelector(".checklist-complete-section");
        let inputElement = checklistCompleteSection.querySelector(".checklist-input");
        checklistCompleteSection.removeChild(inputElement);
        inputElement = null;
    };
    const removeChecklistTaskElementDOM = (taskIndex, checklistTaskIndex) => {
        const taskElement = document.querySelector(`[data-task-index='${taskIndex}']`);
        const checklistElement = taskElement.querySelector(".checklist");
        let checklistTaskElement = checklistElement.querySelector(`[data-checklist-task-index='${checklistTaskIndex}']`);
        checklistElement.removeChild(checklistTaskElement);
        checklistTaskElement = null;
    };
    const removeAllTaskElements = () => {
        const taskContentSection = document.querySelector(".to-do-content");
        taskContentSection.replaceChildren();
    };
    return { removeTabNameElement, removeTabInputElement, removeTabElementFromDOM,
        resetCurrentTabStatus, removeTaskElementFromDOM, removeTaskSubcontentElementFromDOM,
        removeTaskInputElement, removeChecklistTaskDescriptionDOM, removeChecklistTaskInputElement,
        removeChecklistTaskElementDOM, removeAllTaskElements, }
})();

export { DOMControllerRemove };