import { DOMUpdateController } from "./DOM_update_controller";
import { eventBundler } from "./event_bundler_object";

const eventAssigner = (() => {
    const addNewTabListener = () => {
        const addTabButton = document.querySelector(".add-tab");
        addTabButton.addEventListener("click", eventBundler.addTab);
    };
    const addEditTabListener = () => {
        const tabInput = document.querySelector(".tab-name-input");
        tabInput.addEventListener("keydown", eventBundler.editTab);
    }
    const addTabInputElementListener = () => {
        const tabEditButtons = Array.from(document.querySelectorAll(".edit-tab"));
        for (const button of tabEditButtons) {
            button.addEventListener("click", eventBundler.insertTabInputElement);
        }
    }
    return { addNewTabListener, addEditTabListener, addTabInputElementListener };
})();

export { eventAssigner };