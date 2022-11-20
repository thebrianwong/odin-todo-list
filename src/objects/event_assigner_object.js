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
    return { addNewTabListener, addEditTabListener };
})();

export { eventAssigner };