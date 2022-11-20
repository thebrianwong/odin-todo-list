import { toDoList } from "./todo_list_object";
import { toDoTab } from "./todo_tab_object";

const DOMUpdateController = (() => {
    const ensureCorrectTabElement = (event) => {
        let tabElement = event.target.parentElement;
        while (tabElement.getAttribute("class") !== "tab-title") {
            tabElement = tabElement.parentElement;
        };
        return tabElement;
    }
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
                <h2>${newTabObjectTitle}</h2>
            </button>
            <button class="edit-tab">
                <img src="assets/pencil.png" alt="Edit tab name button">
            </button>
            <button class="remove-tab">
                <img src="assets/close.png" alt="Remove tab button">
            </button>
            `;
        toDoTabSection.insertBefore(newTabNode, addTabButton);
    }
    const editTabNameDOM = (event) => {
        const tabElement = event.target.parentElement;
        const tabButton = tabElement.querySelector("button");
        const tabName = tabButton.querySelector("h2");
        const index = tabElement.dataset.tabIndex;
        const tabObject = toDoList.getSpecificChecklistTask(index);
        const newTabName = tabObject.getTaskTitle();
        tabName.textContent = newTabName;
    }
    const removeTabNameElement = (event) => {
        const tabElement = ensureCorrectTabElement(event);
        let switchTab = tabElement.querySelector(".switch-tab")
        tabElement.removeChild(switchTab);
        switchTab = null
    }
    const setInputElementValue = (tabElement, inputElement) => {
        const index = tabElement.dataset.tabIndex;
        const tabObject = toDoList.getSpecificChecklistTask(index);
        const tabName = tabObject.getTaskTitle();
        inputElement.value = tabName;
    }
    const insertTabInputElement = (event) => {
        const tabElement = ensureCorrectTabElement(event);
        const inputElement = document.createElement("input");
        inputElement.classList.add("tab-name-input");
        inputElement.setAttribute("type", "text");
        tabElement.insertBefore(inputElement, tabElement.firstChild);
        setInputElementValue(tabElement, inputElement);
    }
    const checkForTabInputElement = (event) => {
        const tabElement = ensureCorrectTabElement(event);
        if (tabElement.firstElementChild.tagName === "INPUT") {
            return true;
        } else {
            return false;
        };
    };
    return { addNewTabToDOM, editTabNameDOM, removeTabNameElement, insertTabInputElement, checkForTabInputElement, };
})();

export { DOMUpdateController };