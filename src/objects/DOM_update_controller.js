const DOMUpdateController = (() => {
    const addNewTabToDOM = () => {
        const addTabButton = document.querySelector(".add-tab");
        const toDoTabSection = document.querySelector(".to-do-tab-section");
        const newTab = document.createElement("div");
        newTab.classList.add("tab-title");
        newTab.innerHTML = `
            <button class="switch-tab">
                <h2>Homework</h2>
            </button>
            <button class="edit-tab">
                <img src="assets/pencil.png" alt="Edit tab name button">
            </button>
            <button class="remove-tab">
                <img src="assets/close.png" alt="Remove tab button">
            </button>
            `;
        toDoTabSection.insertBefore(newTab, addTabButton);
    }
    return { addNewTabToDOM, };
})();

export { DOMUpdateController };