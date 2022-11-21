const helperFunctions = (() => {
    const ensureCorrectTabElement = (event) => {
        let tabElement = event.target.parentElement;
        while (tabElement.getAttribute("class") !== "tab-title") {
            tabElement = tabElement.parentElement;
        };
        return tabElement;
    };
    return { ensureCorrectTabElement, };
})();

export { helperFunctions };