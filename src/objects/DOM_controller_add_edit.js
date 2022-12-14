import { eventBundler } from "./event_bundler_object";
import { toDoList } from "./todo_list_object";
import { helperFunctions } from "./helper_functions";

const DOMControllerAddEdit = (() => {
    const addNewTabToDOM = (index) => {
        const addTabButton = document.querySelector(".add-tab");
        const toDoTabSection = document.querySelector(".tab-section");
        const newTabElement = document.createElement("div");
        const newTabObject = toDoList.getSpecificChecklistTask(index);
        const newTabObjectTitle = newTabObject.getTaskTitle();
        newTabElement.classList.add("tab-title");
        newTabElement.dataset.tabIndex = index;
        newTabElement.innerHTML = `
            <button class="switch-tab">
                <h2 class="tab-name">TAB NAME PLACEHOLDER</h2>
            </button>
            <button class="edit-tab">
                <img src="assets/pencil.png" alt="Edit tab name button">
            </button>
            <button class="remove-tab">
                <img src="assets/close.png" alt="Remove tab button">
            </button>
        `;
        const tabNameElement = newTabElement.querySelector(".tab-name");
        tabNameElement.textContent = newTabObjectTitle;
        toDoTabSection.insertBefore(newTabElement, addTabButton);
        return newTabElement;
    }
    const insertTabInputElement = (tabIndex) => {
        const tabElement = helperFunctions.getTabElement(tabIndex);
        const inputElement = document.createElement("input");
        inputElement.classList.add("tab-name-input");
        inputElement.setAttribute("type", "text");
        tabElement.insertBefore(inputElement, tabElement.firstChild);
        inputElement.focus();
        return inputElement;
    }
    const setTabInputElementValue = (tabIndex) => {
        const tabElement = helperFunctions.getTabElement(tabIndex);
        const inputElement = tabElement.querySelector("input");
        const tabObject = toDoList.getSpecificChecklistTask(tabIndex);
        const tabName = tabObject.getTaskTitle();
        inputElement.value = tabName;
    }
    const insertTabNameElement = (tabIndex) => {
        const tabElement = helperFunctions.getTabElement(tabIndex);
        const tabObject = toDoList.getSpecificChecklistTask(tabIndex);
        const tabName = tabObject.getTaskTitle();
        const tabButton = document.createElement("button");
        tabButton.classList.add("switch-tab");
        const tabButtonName = document.createElement("h2");
        tabButtonName.classList.add("tab-name");
        tabButtonName.textContent = tabName;
        tabButton.appendChild(tabButtonName);
        tabElement.insertBefore(tabButton, tabElement.firstChild);
        return tabElement;
    };
    const addCurrentTabIndicator = () => {
        const currentTabIndex = toDoList.getCurrentTabIndex();
        if (currentTabIndex === null) {
            return;
        };
        const tabElement = helperFunctions.getTabElement(currentTabIndex);
        tabElement.setAttribute("id", "current-tab");
    }
    const loadTasksFromNewCurrentTab = () => {
        const currentTabObject = toDoList.getCurrentTabObject();
        const listOfTasks = currentTabObject.getChecklistTasks();
        for (const taskIndex in listOfTasks) {
            const taskObject = listOfTasks[taskIndex]
            if (taskObject !== undefined) {
                const newTaskElement = addNewTaskToDOM(taskIndex);
                changePinButtonImage(taskIndex);
                shiftTaskElementPosition(taskIndex);
                toggleTaskDOMComplete(taskIndex);
                eventBundler.addTaskListeners(newTaskElement);
                const listOfChecklistTasks = taskObject.getChecklistTasks();
                for (const checklistTaskIndex in listOfChecklistTasks) {
                    const checklistTaskObject = listOfChecklistTasks[checklistTaskIndex];
                    if (checklistTaskObject !== undefined) {
                        const newChecklistTaskElement = addNewChecklistTaskToDOM(taskIndex, checklistTaskIndex);
                        toggleChecklistTaskDOMComplete(taskIndex, checklistTaskIndex);
                        eventBundler.addChecklistTaskListeners(newChecklistTaskElement);
                    }
                }
            };
        };
    };
    const addNewTaskToDOM = (index) => {
        const currentTabObject = toDoList.getCurrentTabObject();
        const newTaskObject = currentTabObject.getSpecificChecklistTask(index);
        const toDoContent = document.querySelector(".content-section");
        const newTaskElement = document.createElement("div");
        newTaskElement.classList.add("to-do-task");
        newTaskElement.dataset.taskIndex = index;
        const newTaskTitle = newTaskObject.getTaskTitle();
        const newTaskDescription = newTaskObject.getTaskDescription();
        const newTaskDueDate = newTaskObject.getTaskDueDate();
        const newTaskNotes = newTaskObject.getTaskNotes();
        const newTaskCompleteID = `task-complete-checkbox-${index}`;
        newTaskElement.innerHTML = `
            <div class="task-overview">
                <div class="task-title-section to-do-task-subcontainer">
                    <h3 class="to-do-title">TITLE PLACEHOLDER</h3>
                    <button class="task-pin">
                        <img src="./assets/pin-unpinned.png" alt="Pin task button">
                    </button>
                    <button class="edit-task-title edit-task">
                        <img src="assets/pencil.png" alt="Edit task title button">
                    </button>
                    <button class="remove-task">
                        <img src="assets/close.png" alt="Remove task button">
                    </button>
                </div>
                <div class="task-misc-section">
                    <div class="task-complete-section">
                        <label for="ID PLACEHOLDER" class="task-complete-label">Completed:</label>
                        <input type="checkbox" name="" class="task-complete-checkbox" id="ID PLACEHOLDER">
                    </div>
                    <button class="task-change-display">
                        <img src="assets/chevron-down.png" alt="Change task display button">
                    </button>
                </div>
                <div class="task-due-date-section to-do-task-subcontainer">
                    <p class="to-do-due-date">DUE DATE PLACEHOLDER</p>
                    <button class="edit-task-due-date edit-task">
                        <img src="assets/pencil.png" alt="Edit task due date button">
                    </button>
                </div>
            </div>
            <div class="task-description-section to-do-task-subcontainer animation-target">
                <p class="to-do-description">DESCRIPTION PLACEHOLDER</p>
                <button class="edit-task-description edit-task">
                    <img src="assets/pencil.png" alt="Edit task description button">
                </button>
            </div>
            <div class="task-notes-section to-do-task-subcontainer animation-target">
                <p class="to-do-notes">NOTES PLACEHOLDER</p>
                <button class="edit-task-notes edit-task">
                    <img src="assets/pencil.png" alt="Edit task notes button">
                </button>
            </div>
            <div action="" class="checklist animation-target">
                <div class="checklist-header">
                    <legend class="checklist-label">Checklist</legend>
                    <button class="add-checklist-task" type="button">
                        <img src="assets/plus.png" alt="Add checklist task button">
                    </button>
                </div>
            </div>
        `;
        const titleElement = newTaskElement.querySelector(".to-do-title");
        titleElement.textContent = newTaskTitle;
        const dueDateElement = newTaskElement.querySelector(".to-do-due-date");
        dueDateElement.textContent = "Due On: " + newTaskDueDate;
        const descriptionElement = newTaskElement.querySelector(".to-do-description");
        descriptionElement.textContent = "Description: " + newTaskDescription;
        const notesElement = newTaskElement.querySelector(".to-do-notes");
        notesElement.textContent = "Notes: " + newTaskNotes;
        toDoContent.appendChild(newTaskElement);
        const completeLabel = newTaskElement.querySelector("label");
        completeLabel.setAttribute("for", newTaskCompleteID);
        const completeCheckbox = newTaskElement.querySelector(".task-complete-checkbox");
        completeCheckbox.setAttribute("id", newTaskCompleteID);
        return newTaskElement;
    }
    const insertTaskInputElement = (taskIndex, buttonType) => {
        const taskSubcontainer = helperFunctions.getTaskSubcontainerElement(taskIndex, buttonType);
        const inputElement = document.createElement("input");
        inputElement.classList.add("task-input");
        inputElement.setAttribute("type", "text");
        taskSubcontainer.insertBefore(inputElement, taskSubcontainer.firstChild);
        inputElement.focus();
        return inputElement;
    };
    const setTaskInputElementValue = (taskIndex, buttonType) => {
        const taskSubcontainerElement = helperFunctions.getTaskSubcontainerElement(taskIndex, buttonType);
        const inputElement = taskSubcontainerElement.querySelector("input");
        const currentTabObject = toDoList.getCurrentTabObject();
        const taskObject = currentTabObject.getSpecificChecklistTask(taskIndex);
        let taskObjectValue = undefined;
        if (buttonType === "Title") {
            taskObjectValue = taskObject.getTaskTitle();
        } else if (buttonType === "Due Date") {
            taskObjectValue = taskObject.getTaskDueDate();
        } else if (buttonType === "Description") {
            taskObjectValue = taskObject.getTaskDescription();
        } else if (buttonType === "Notes") {
            taskObjectValue = taskObject.getTaskNotes();
        };
        inputElement.value = taskObjectValue;
    };
    const insertTaskSubcontentElement = (taskIndex, buttonType) => {
        const taskSubcontainerElement = helperFunctions.getTaskSubcontainerElement(taskIndex, buttonType);
        const currentTabObject = toDoList.getCurrentTabObject();
        const taskObject = currentTabObject.getSpecificChecklistTask(taskIndex);
        let taskSubcontentElement = undefined;
        if (buttonType === "Title") {
            const taskTitle = taskObject.getTaskTitle();
            taskSubcontentElement = document.createElement("h3");
            taskSubcontentElement.classList.add("to-do-title");
            taskSubcontentElement.textContent = taskTitle;
        } else if (buttonType === "Due Date") {
            const taskDueDate = taskObject.getTaskDueDate();
            taskSubcontentElement = document.createElement("p");
            taskSubcontentElement.classList.add("to-do-due-date");
            taskSubcontentElement.textContent = "Due On: " + taskDueDate;
        } else if (buttonType === "Description") {
            const taskDescription = taskObject.getTaskDescription();
            taskSubcontentElement = document.createElement("p");
            taskSubcontentElement.classList.add("to-do-description");
            taskSubcontentElement.textContent = "Description: " + taskDescription;
        } else if (buttonType === "Notes") {
            const taskNotes = taskObject.getTaskNotes();
            taskSubcontentElement = document.createElement("p");
            taskSubcontentElement.classList.add("to-do-notes");
            taskSubcontentElement.textContent = "Notes: " + taskNotes;
        };
        taskSubcontainerElement.insertBefore(taskSubcontentElement, taskSubcontainerElement.firstChild);
    }
    const toggleTaskDOMComplete = (taskIndex) => {
        const taskElement = helperFunctions.getTaskElement(taskIndex);
        const completeCheckbox = taskElement.querySelector(".task-complete-checkbox");
        const currentTabObject =  toDoList.getCurrentTabObject();
        const taskObject = currentTabObject.getSpecificChecklistTask(taskIndex);
        const taskCompletedStated = taskObject.getCompletedState();
        if (taskCompletedStated) {
            completeCheckbox.checked = true;
            taskElement.classList.add("task-completed");
        } else {
            completeCheckbox.checked = false;
            taskElement.classList.remove("task-completed");
        };
    };
    const addNewChecklistTaskToDOM = (taskIndex, newChecklistTaskIndex) => {
        const taskElement = helperFunctions.getTaskElement(taskIndex);
        const checklistElement = taskElement.querySelector(".checklist");
        const currentTabObject = toDoList.getCurrentTabObject();
        const taskObject = currentTabObject.getSpecificChecklistTask(taskIndex);
        const checklistTaskObject = taskObject.getSpecificChecklistTask(newChecklistTaskIndex);
        const newChecklistTaskDescription = checklistTaskObject.getTaskDescription();
        const newChecklistTaskElement = document.createElement("div");
        newChecklistTaskElement.classList.add("checklist-task");
        newChecklistTaskElement.dataset.checklistTaskIndex = newChecklistTaskIndex;
        newChecklistTaskElement.innerHTML = `
            <div class="checklist-complete-section">
                <input type="checkbox" id="checklist-${taskIndex}-${newChecklistTaskIndex}" class="checklist-complete-checkbox">
                <label for="checklist-${taskIndex}-${newChecklistTaskIndex}" class="checklist-task-description">
                    DESCRIPTION PLACEHOLDER
                </label>
            </div>
            <button class="edit-checklist-task" type="button">
                <img src="assets/pencil.png" alt="Edit checklist task button">
            </button>
            <button class="remove-checklist-task" type="button">
                <img src="assets/close.png" alt="Edit checklist task button">
            </button>
        `
        const checklistTaskDescriptionElement = newChecklistTaskElement.querySelector(".checklist-task-description");
        checklistTaskDescriptionElement.textContent = newChecklistTaskDescription;
        checklistElement.appendChild(newChecklistTaskElement);
        return newChecklistTaskElement;
    };
    const insertChecklistTaskInputElement = (taskIndex, checklistTaskIndex) => {
        const checklistTaskElement = helperFunctions.getChecklistTaskElement(taskIndex, checklistTaskIndex);
        const checklistCompleteSection = checklistTaskElement.querySelector(".checklist-complete-section");
        const inputElement = document.createElement("input");
        inputElement.classList.add("checklist-input");
        inputElement.setAttribute("type", "text");
        checklistCompleteSection.appendChild(inputElement);
        inputElement.focus();
        return inputElement;
    };
    const setChecklistTaskInputElementValue = (taskIndex, checklistTaskIndex) => {
        const checklistTaskElement = helperFunctions.getChecklistTaskElement(taskIndex, checklistTaskIndex);
        const inputElement = checklistTaskElement.querySelector(".checklist-input");
        const currentTabObject = toDoList.getCurrentTabObject();
        const taskObject = currentTabObject.getSpecificChecklistTask(taskIndex);
        const checklistTaskObject = taskObject.getSpecificChecklistTask(checklistTaskIndex);
        const checklistTaskDescription = checklistTaskObject.getTaskDescription();
        inputElement.value = checklistTaskDescription;
    };
    const insertChecklistTaskDescriptionElement = (taskIndex, checklistTaskIndex) => {
        const checklistTaskElement = helperFunctions.getChecklistTaskElement(taskIndex, checklistTaskIndex);
        const checklistCompleteSection = checklistTaskElement.querySelector(".checklist-complete-section");
        const currentTabObject = toDoList.getCurrentTabObject();
        const taskObject = currentTabObject.getSpecificChecklistTask(taskIndex);
        const checklistTaskObject = taskObject.getSpecificChecklistTask(checklistTaskIndex);
        const checklistTaskDescription = checklistTaskObject.getTaskDescription();
        const checklistTaskDescriptionElement = document.createElement("label");
        checklistTaskDescriptionElement.setAttribute("for", `checklist-${taskIndex}-${checklistTaskIndex}`);
        checklistTaskDescriptionElement.classList.add("checklist-task-description");
        checklistTaskDescriptionElement.textContent = checklistTaskDescription;
        checklistCompleteSection.appendChild(checklistTaskDescriptionElement);
    };
    const toggleChecklistTaskDOMComplete = (taskIndex, checklistTaskIndex) => {
        const checklistTaskElement = helperFunctions.getChecklistTaskElement(taskIndex, checklistTaskIndex);
        const checklistCompleteSection = checklistTaskElement.querySelector(".checklist-complete-section");
        const checklistCompleteCheckbox = checklistCompleteSection.querySelector(".checklist-complete-checkbox");
        const currentTabObject = toDoList.getCurrentTabObject();
        const taskObject = currentTabObject.getSpecificChecklistTask(taskIndex);
        const checklistTaskObject = taskObject.getSpecificChecklistTask(checklistTaskIndex);
        checklistCompleteCheckbox.checked = checklistTaskObject.getCompletedState();
        if (checklistTaskObject.getCompletedState()) {
            checklistCompleteCheckbox.classList.add("checklist-task-completed");
        } else {
            checklistCompleteCheckbox.classList.remove("checklist-task-completed");
        };
    };
    const changePinButtonImage = (taskIndex) => {
        const taskElement = helperFunctions.getTaskElement(taskIndex);
        const currentTabObject = toDoList.getCurrentTabObject();
        const taskObject = currentTabObject.getSpecificChecklistTask(taskIndex);
        const pinButton = taskElement.querySelector(".task-pin")
        const pinButtonImage = pinButton.querySelector("img");
        taskObject.getPinnedState()
            ? pinButtonImage.setAttribute("src", "./assets/pin-pinned.png")
            : pinButtonImage.setAttribute("src", "./assets/pin-unpinned.png");
    };
    const shiftTaskElementPosition = (taskIndex) => {
        const taskElement = helperFunctions.getTaskElement(taskIndex);
        const currentTabObject = toDoList.getCurrentTabObject();
        const taskObject = currentTabObject.getSpecificChecklistTask(taskIndex);
        const taskElementIndex = taskElement.dataset.taskIndex;
        const taskContentSection = document.querySelector(".content-section");
        if (taskObject.getPinnedState()) {
            const listOfPinnedTaskElements = Array.from(document.querySelectorAll(".pinned-task"));
            if (listOfPinnedTaskElements.length === 0) {
                taskContentSection.insertBefore(taskElement, taskContentSection.firstElementChild);
            } else {
                const arrayEndIndex = listOfPinnedTaskElements.length - 1;
                const lastPinnedTaskElement = listOfPinnedTaskElements[arrayEndIndex];
                for (const pinnedTaskElement of listOfPinnedTaskElements) {
                    const pinnedTaskElementIndex = pinnedTaskElement.dataset.taskIndex;
                    if (taskElementIndex < pinnedTaskElementIndex) {
                        taskContentSection.insertBefore(taskElement, pinnedTaskElement);
                        break;
                    } else if (pinnedTaskElement === lastPinnedTaskElement) {
                        lastPinnedTaskElement.insertAdjacentElement("afterend", taskElement);
                    };
                };
            };
            taskElement.classList.add("pinned-task");
        } else {
            const listOfUnpinnedTaskElements = Array.from(taskContentSection.querySelectorAll(".to-do-task:not(.pinned-task)"));
            if (listOfUnpinnedTaskElements.length === 0) {
                taskContentSection.appendChild(taskElement);
            } else {
                const arrayEndIndex = listOfUnpinnedTaskElements.length - 1;
                const lastUnpinnedTaskElement = listOfUnpinnedTaskElements[arrayEndIndex];
                for (const unpinnedTaskElement of listOfUnpinnedTaskElements) {
                    const unpinnedTaskElementIndex = unpinnedTaskElement.dataset.taskIndex;
                    if (taskElementIndex < unpinnedTaskElementIndex) {
                        taskContentSection.insertBefore(taskElement, unpinnedTaskElement);
                        break;
                    } else if (unpinnedTaskElement === lastUnpinnedTaskElement) {
                        taskContentSection.appendChild(taskElement, lastUnpinnedTaskElement);
                    };
                };
            };
            taskElement.classList.remove("pinned-task");
        };
    };
    const toggleDisplayTaskDetails = (taskIndex) => {
        const taskElement = helperFunctions.getTaskElement(taskIndex);
        const elementsToToggle = Array.from(taskElement.querySelectorAll(".animation-target"));
        elementsToToggle.forEach((element) => {
            const elementClasses = Array.from(element.classList);
            if (elementClasses.includes("hide-to-do-details")) {
                element.classList.remove("hide-to-do-details");
                element.classList.add("display-to-do-details");
                element.style.display = "flex";
            } else {
                element.classList.add("hide-to-do-details");
                element.classList.remove("display-to-do-details");
                setTimeout(() => {
                    element.style.display = "none";
                }, 1000);
            };
        });
        preventDoubleClick(taskElement);
    };
    const preventDoubleClick = (taskElement) => {
        taskElement.classList.add("mid-animation");
        setTimeout(() => {
            taskElement.classList.remove("mid-animation");
        }, 1000);
    };
    const rotateChevronButton = (taskIndex) => {
        const taskElement = helperFunctions.getTaskElement(taskIndex);
        const chevronButton = taskElement.querySelector(".task-change-display");
        const buttonImage = chevronButton.querySelector("img");
        const buttonImageClasses = Array.from(buttonImage.classList);
        if (buttonImageClasses.length === 0 || buttonImageClasses.includes("rotate-hide-task-details")) {
            buttonImage.classList.remove("rotate-hide-task-details");
            buttonImage.classList.add("rotate-display-task-details");
            buttonImage.classList.add("rotated-chevron");
        } else if (buttonImageClasses.includes("rotate-display-task-details")) {
            buttonImage.classList.remove("rotate-display-task-details");
            buttonImage.classList.add("rotate-hide-task-details");
            buttonImage.classList.remove("rotated-chevron");
        };
    };
    const toggleAnimations = (taskIndex, action) => {
        const taskElement = helperFunctions.getTaskElement(taskIndex);
        const toggleDisplayButton = taskElement.querySelector(".task-change-display");
        const buttonImage = toggleDisplayButton.querySelector("img");
        const elementsToToggle = Array.from(taskElement.querySelectorAll(".animation-target"));
        elementsToToggle.push(buttonImage)
        elementsToToggle.forEach((element) => {
            if (action === "Enable") {
                element.classList.add("no-animations");
            } else if (action === "Disable"){
                element.classList.remove("no-animations");
            };
        });
    };
    return {
        addNewTabToDOM,
        insertTabInputElement,
        setTabInputElementValue,
        insertTabNameElement,
        addCurrentTabIndicator,
        loadTasksFromNewCurrentTab,
        addNewTaskToDOM,
        insertTaskInputElement,
        setTaskInputElementValue,
        insertTaskSubcontentElement,
        toggleTaskDOMComplete,
        addNewChecklistTaskToDOM,
        insertChecklistTaskInputElement,
        setChecklistTaskInputElementValue,
        insertChecklistTaskDescriptionElement,
        toggleChecklistTaskDOMComplete,
        changePinButtonImage,
        shiftTaskElementPosition,
        toggleDisplayTaskDetails,
        rotateChevronButton,
        toggleAnimations
    };
})();

export { DOMControllerAddEdit };