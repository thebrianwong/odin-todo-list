import { toDoList } from "./todo_list_object";
import { toDoTab } from "./todo_tab_object";
import { helperFunctions } from "./helper_functions";

const DOMControllerAddEdit = (() => {
    const addNewTabToDOM = (index) => {
        const addTabButton = document.querySelector(".add-tab");
        const toDoTabSection = document.querySelector(".to-do-tab-section");
        const newTabNode = document.createElement("div");
        const newTabObject = toDoList.getSpecificChecklistTask(index);
        const newTabObjectTitle = newTabObject.getTaskTitle();
        newTabNode.classList.add("tab-title");
        newTabNode.dataset.tabIndex = index;
        newTabNode.innerHTML = `
            <button class="switch-tab">
                <h2 class="tab-name">TAB NAME PLACEHOLDER</h2>
            </button>
            <button class="edit-tab">
                <img src="assets/pencil.png" alt="Edit tab name button">
            </button>
            <button class="remove-tab">
                <img src="assets/close.png" alt="Remove tab button">
            </button>
        `;
        const tabNameDOM = newTabNode.querySelector(".tab-name");
        tabNameDOM.textContent = newTabObjectTitle;
        toDoTabSection.insertBefore(newTabNode, addTabButton);
        return newTabNode;
    }
    const setInputElementValue = (event, inputElement) => {
        const tabElement = helperFunctions.ensureCorrectTabElement(event);
        const index = tabElement.dataset.tabIndex;
        const tabObject = toDoList.getSpecificChecklistTask(index);
        const tabName = tabObject.getTaskTitle();
        inputElement.value = tabName;
    }
    const insertTabInputElement = (event) => {
        const tabElement = helperFunctions.ensureCorrectTabElement(event);
        const inputElement = document.createElement("input");
        inputElement.classList.add("tab-name-input");
        inputElement.setAttribute("type", "text");
        tabElement.insertBefore(inputElement, tabElement.firstChild);
        inputElement.focus();
        return inputElement;
    }
    const insertTabNameElement = (event) => {
        const tabElement = helperFunctions.ensureCorrectTabElement(event);
        const index = tabElement.dataset.tabIndex;
        const tabObject = toDoList.getSpecificChecklistTask(index);
        const tabName = tabObject.getTaskTitle();
        const tabButton = document.createElement("button");
        tabButton.classList.add("switch-tab");
        const tabButtonName = document.createElement("h2");
        tabButtonName.textContent = tabName;
        tabButton.appendChild(tabButtonName);
        tabElement.insertBefore(tabButton, tabElement.firstChild);
    };
    const setDefaultCurrentTabDOM = (index) => {
        const toDoTabSection = document.querySelector(".to-do-tab-section");
        const currentTab = toDoTabSection.querySelector(`[data-tab-index='${index}']`);
        currentTab.setAttribute("id", "current-tab");
    };
    const setCurrentTabDOM = (event) => {
        const newCurrentTab = helperFunctions.ensureCorrectTabElement(event);
        newCurrentTab.setAttribute("id", "current-tab");
    }
    const setFirstTabToCurrentTab = (firstTabIndex) => {
        if (firstTabIndex === undefined) {
            return;
        }
        const toDoTabSection = document.querySelector(".to-do-tab-section");
        const firstTab = toDoTabSection.querySelector(`[data-tab-index='${firstTabIndex}']`)
        firstTab.setAttribute("id", "current-tab");
    }
    const addNewTaskToDOM = (index) => {
        const currentTabIndex = toDoList.getCurrentTabIndex();
        const currentTabObject = toDoList.getSpecificChecklistTask(currentTabIndex);
        const newTaskObject = currentTabObject.getSpecificChecklistTask(index);
        const toDoContent = document.querySelector(".to-do-content");
        const newTaskNode = document.createElement("div");
        newTaskNode.classList.add("to-do-task");
        newTaskNode.dataset.taskIndex = index;
        const newTaskTitle = newTaskObject.getTaskTitle();
        const newTaskDescription = newTaskObject.getTaskDescription();
        const newTaskDueDate = newTaskObject.getTaskDueDate();
        const newTaskNotes = newTaskObject.getTaskNotes();
        newTaskNode.innerHTML = `
            <div class="to-do-task-overview">
                <div class="to-do-task-overview-top">
                    <h3 class="to-do-title">TITLE PLACEHOLDER</h3>
                    <button class="to-do-pin">
                        <img src="./assets/pin-outline.png" alt="Pin task button">
                    </button>
                    <button class="edit-title">
                        <img src="assets/pencil.png" alt="Edit task title button">
                    </button>
                    <button class="to-do-remove-task">
                        <img src="assets/close.png" alt="Remove task button">
                    </button>
                </div>
                <div class="to-do-overview-middle">
                    <div class="to-do-complete">
                        <label for="to-do-complete-checkbox" class="to-do-complete-label">Completed:</label>
                        <input type="checkbox" name="" class="to-do-complete-checkbox" id="to-do-complete-checkbox">
                    </div>
                    <button class="to-do-task-change-display">
                        <img src="assets/chevron-down.png" alt="Change task display button">
                    </button>
                </div>
                <div class="to-do-task-overview-bottom">
                    <p class="to-do-due-date">DUE DATE PLACEHOLDER</p>
                    <button class="edit-due-date">
                        <img src="assets/pencil.png" alt="Edit task due date button">
                    </button>
                </div>
            </div>
            <div class="to-do-description-section">
                <p class="to-do-description">DESCRIPTION PLACEHOLDER</p>
                <button class="edit-description">
                    <img src="assets/pencil.png" alt="Edit task description button">
                </button>
            </div>
            <div class="to-do-notes-section">
                <p class="to-do-notes">NOTES PLACEHOLDER</p>
                <button class="edit-notes">
                    <img src="assets/pencil.png" alt="Edit task notes button">
                </button>
            </div>
            <form action="" class="task-checklist">
                <div class="checklist-header">
                    <legend class="checklist-label">Checklist</legend>
                    <button class="add-checklist-task">
                        <img src="assets/plus.png" alt="Add checklist task button">
                    </button>
                </div>
            </form>
        `;
        const titleDOM = newTaskNode.querySelector(".to-do-title");
        titleDOM.textContent = newTaskTitle;
        const dueDateDOM = newTaskNode.querySelector(".to-do-due-date");
        dueDateDOM.textContent = newTaskDueDate;
        const descriptionDOM = newTaskNode.querySelector(".to-do-description");
        descriptionDOM.textContent = newTaskDescription;
        const notesDOM = newTaskNode.querySelector(".to-do-notes");
        notesDOM.textContent = newTaskNotes;
        toDoContent.appendChild(newTaskNode);
        return newTaskNode;
    }
    return { addNewTabToDOM, setInputElementValue,
        insertTabInputElement, insertTabNameElement, setDefaultCurrentTabDOM, setCurrentTabDOM, setFirstTabToCurrentTab, addNewTaskToDOM, };
})();

export { DOMControllerAddEdit };