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
    return { ensureCorrectTabElement, checkForTabInputElement, };
})();

export { helperFunctions };