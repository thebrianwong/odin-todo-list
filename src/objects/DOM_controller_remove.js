import { toDoList } from "./todo_list_object";
import { toDoTab } from "./todo_tab_object";
import { helperFunctions } from "./helper_functions";

const DOMControllerRemove = (() => {
    const removeTabNameElement = (event) => {
        const tabElement = helperFunctions.ensureCorrectTabElement(event);
        let switchTab = tabElement.querySelector(".switch-tab")
        tabElement.removeChild(switchTab);
        switchTab = null
    };
    const removeTabInputElement = (event) => {
        const tabElement = helperFunctions.ensureCorrectTabElement(event);
        let inputElement = tabElement.querySelector("input");
        tabElement.removeChild(inputElement);
        inputElement = null;
    };
    const removeTabElementFromDOM = (event) => {
        let tabElement = helperFunctions.ensureCorrectTabElement(event);
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
    const removeTaskElementFromDOM = (event) => {
        let taskElement = helperFunctions.ensureCorrectTaskElement(event);
        const toDoTaskSection = document.querySelector(".to-do-content");
        toDoTaskSection.removeChild(taskElement);
        taskElement = null;
    }
    const removeTaskSubcontentElementFromDOM = (event) => {
        const taskSubcontainer = helperFunctions.ensureCorrectSubcontainer(event);
        let taskSubcontentElement = taskSubcontainer.firstElementChild;
        taskSubcontainer.removeChild(taskSubcontentElement);
        taskSubcontentElement = null
    }
    const removeTaskInputElement = (event) => {
        const taskSubcontainer = helperFunctions.ensureCorrectSubcontainer(event);
        let inputElement = taskSubcontainer.querySelector("input");
        taskSubcontainer.removeChild(inputElement);
        inputElement = null;
    }
    const removeChecklistTaskDescriptionDOM = (event) => {
        const buttonElement = helperFunctions.ensureCorrectButtonElement(event);
        const checklistCompleteSection = buttonElement.previousElementSibling;
        console.log(checklistCompleteSection);
        let checklistTaskDescription = checklistCompleteSection.querySelector("label");
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
    return { removeTabNameElement, removeTabInputElement, removeTabElementFromDOM,
        resetCurrentTabStatus, removeTaskElementFromDOM, removeTaskSubcontentElementFromDOM,
        removeTaskInputElement, removeChecklistTaskDescriptionDOM, removeChecklistTaskInputElement, }
})();

export { DOMControllerRemove };