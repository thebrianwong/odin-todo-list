import { DOMUpdateController } from "./DOM_controller_add_edit";
import { eventBundler } from "./event_bundler_object";

const eventAssigner = (() => {
    const addNewTabListener = () => {
        const addTabButton = document.querySelector(".add-tab");
        addTabButton.addEventListener("click", eventBundler.addTab);
    };
    const addEditTabButtonListener = () => {
        const tabEditButtons = Array.from(document.querySelectorAll(".edit-tab"));
        for (const button of tabEditButtons) {
            button.addEventListener("click", eventBundler.insertTabInputElement);
        }
    }
    const addTabInputListener = (inputElement) => {
        inputElement.addEventListener("keydown", eventBundler.updateTab)
    }
    const addEditTabButtonListenerForNewTabs = (tabElement) => {
        const tabEditButton = tabElement.querySelector(".edit-tab");
        tabEditButton.addEventListener("click", eventBundler.insertTabInputElement);
    };
    const addRemoveTabButtonListenerForInitialTabs = () => {
        const tabRemoveButtons = Array.from(document.querySelectorAll(".remove-tab"));
        for (const button of tabRemoveButtons) {
            button.addEventListener("click", eventBundler.removeTab);
        };
    };
    const addRemoveTabButtonListenerForNewTabs = (tabElement) => {
        const tabRemoveButton = tabElement.querySelector(".remove-tab");
        tabRemoveButton.addEventListener("click", eventBundler.removeTab);
    }
    const addSwitchTabListenerForInitialTabs = () => {
        const tabSwitchButtons = Array.from(document.querySelectorAll(".switch-tab"));
        for (const button of tabSwitchButtons) {
            button.addEventListener("click", eventBundler.switchTab);
        };
    }
    const addSwitchTabListenerForNewTabs = (tabElement) => {
        const tabSwitchButton = tabElement.querySelector(".switch-tab");
        tabSwitchButton.addEventListener("click", eventBundler.switchTab)
    }
    const addNewTaskListener = () => {
        const newTaskButton = document.querySelector(".new-to-do-task");
        newTaskButton.addEventListener("click", eventBundler.newTask);
    }
    return { addNewTabListener, addEditTabButtonListener, addTabInputListener,
        addEditTabButtonListenerForNewTabs, addRemoveTabButtonListenerForInitialTabs,
        addRemoveTabButtonListenerForNewTabs, addSwitchTabListenerForInitialTabs, addSwitchTabListenerForNewTabs, addNewTaskListener };
})();

export { eventAssigner };