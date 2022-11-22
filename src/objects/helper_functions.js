const helperFunctions = (() => {
    const ensureCorrectTabElement = (event) => {
        let tabElement = event.target.parentElement;
        while (tabElement.getAttribute("class") !== "tab-title") {
            tabElement = tabElement.parentElement;
        };
        return tabElement;
    };
    const checkForTabInputElement = (event) => {
        const tabElement = ensureCorrectTabElement(event);
        if (tabElement.firstElementChild.tagName === "INPUT") {
            return true;
        } else {
            return false;
        };
    };
    const checkIfWasCurrentTab = (event) => {
        const tabElement = ensureCorrectTabElement(event);
        if (tabElement.getAttribute("id") === "current-tab") {
            return true;
        } else {
            return false;
        };
    };
    const checkIfOnlyOneTab = () => {
        const toDoTabSection = document.querySelector(".to-do-tab-section");
        const toDoTabs = Array.from(toDoTabSection.querySelectorAll(".tab-title"));
        if (toDoTabs.length === 1) {
            return true;
        } else {
            return false;
        };
    };
    const ensureCorrectTaskElement = (event) => {
        let taskElement = event.target.parentElement;
        while (taskElement.getAttribute("class") !== "to-do-task") {
            taskElement = taskElement.parentElement;
        };
        return taskElement;
    }
    return { ensureCorrectTabElement, checkForTabInputElement, checkIfWasCurrentTab, checkIfOnlyOneTab, ensureCorrectTaskElement, };
})();

export { helperFunctions };