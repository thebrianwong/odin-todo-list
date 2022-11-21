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
    return { removeTabNameElement, removeTabInputElement, removeTabElementFromDOM, resetCurrentTabStatus}
})();

export { DOMControllerRemove };