import { DOMUpdateController } from "./DOM_update_controller";
import { eventBundler } from "./event_bundler_object";

const eventAssigner = (() => {
    const addNewTabListener = () => {
        const addTabButton = document.querySelector(".add-tab");
        addTabButton.addEventListener("click", eventBundler.addTab);
    };
    // const addEditTabListener = () => {
    //     const tabInput = document.querySelector(".tab-name-input");
    //     tabInput.addEventListener("keydown", eventBundler.editTab);
    // }
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
    return { addNewTabListener, addEditTabButtonListener, addTabInputListener, addEditTabButtonListenerForNewTabs, addRemoveTabButtonListenerForInitialTabs, addRemoveTabButtonListenerForNewTabs, };
})();

export { eventAssigner };