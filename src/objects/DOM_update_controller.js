import { toDoList } from "./todo_list_object";
import { toDoTab } from "./todo_tab_object";

const DOMUpdateController = (() => {
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
    return { addNewTabToDOM, editTabNameDOM};
})();

export { DOMUpdateController };