import { toDoList } from "./todo_list_object";
import { toDoTab } from "./todo_tab_object";
import { helperFunctions } from "./helper_functions";
import { eventAssigner } from "./event_assigner_object";
import { eventBundler } from "./event_bundler_object";

const DOMControllerAddEdit = (() => {
    const addNewTabToDOM = (index) => {
        const addTabButton = document.querySelector(".add-tab");
        const toDoTabSection = document.querySelector(".to-do-tab-section");
        const newTabNode = document.createElement("div");
        const newTabObject = toDoList.getSpecificChecklistTask(index);
        const newTabObjectTitle = newTabObject.getTaskTitle();
        newTabNode.classList.add("tab-title");
        newTabNode.dataset.tabIndex = index;
        newTabNode.innerHTML = `
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
        const tabNameDOM = newTabNode.querySelector(".tab-name");
        tabNameDOM.textContent = newTabObjectTitle;
        toDoTabSection.insertBefore(newTabNode, addTabButton);
        return newTabNode;
    }
    const setTabInputElementValue = (tabIndex) => {
        const tabElement = document.querySelector(`[data-tab-index='${tabIndex}']`);
        const inputElement = tabElement.querySelector("input");
        const tabObject = toDoList.getSpecificChecklistTask(tabIndex);
        const tabName = tabObject.getTaskTitle();
        inputElement.value = tabName;
    }
    const insertTabInputElement = (tabIndex) => {
        const tabElement = document.querySelector(`[data-tab-index='${tabIndex}']`);
        const inputElement = document.createElement("input");
        inputElement.classList.add("tab-name-input");
        inputElement.setAttribute("type", "text");
        tabElement.insertBefore(inputElement, tabElement.firstChild);
        inputElement.focus();
        return inputElement;
    }
    const insertTabNameElement = (tabIndex) => {
        const tabElement = document.querySelector(`[data-tab-index='${tabIndex}']`);
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
    const setDefaultCurrentTabDOM = (index) => {
        const toDoTabSection = document.querySelector(".to-do-tab-section");
        const currentTab = toDoTabSection.querySelector(`[data-tab-index='${index}']`);
        if (currentTab === null) {
            return;
        };
        currentTab.setAttribute("id", "current-tab");
    };
    const setCurrentTabDOM = (tabIndex) => {
        const newCurrentTabElement = document.querySelector(`[data-tab-index='${tabIndex}']`);
        newCurrentTabElement.setAttribute("id", "current-tab");
    }
    const setFirstTabToCurrentTab = (firstTabIndex) => {
        if (firstTabIndex === undefined) {
            return;
        }
        const firstTab = document.querySelector(`[data-tab-index='${firstTabIndex}']`)
        firstTab.setAttribute("id", "current-tab");
    }
    const addNewTaskToDOM = (index) => {
        const currentTabObject = toDoList.getCurrentTabObject();
        const newTaskObject = currentTabObject.getSpecificChecklistTask(index);
        const toDoContent = document.querySelector(".to-do-content");
        const newTaskNode = document.createElement("div");
        newTaskNode.classList.add("to-do-task");
        newTaskNode.dataset.taskIndex = index;
        const newTaskTitle = newTaskObject.getTaskTitle();
        const newTaskDescription = newTaskObject.getTaskDescription();
        const newTaskDueDate = newTaskObject.getTaskDueDate();
        const newTaskNotes = newTaskObject.getTaskNotes();
        const newTaskCompleteID = `to-do-complete-checkbox-${index}`;
        newTaskNode.innerHTML = `
            <div class="to-do-task-overview">
                <div class="to-do-title-section to-do-task-subcontainer">
                    <h3 class="to-do-title">TITLE PLACEHOLDER</h3>
                    <button class="to-do-pin">
                        <img src="./assets/pin-unpinned.png" alt="Pin task button">
                    </button>
                    <button class="edit-task-title edit-task">
                        <img src="assets/pencil.png" alt="Edit task title button">
                    </button>
                    <button class="to-do-remove-task">
                        <img src="assets/close.png" alt="Remove task button">
                    </button>
                </div>
                <div class="to-do-complete-section">
                    <div class="to-do-complete">
                        <label for="ID PLACEHOLDER" class="to-do-complete-label">Completed:</label>
                        <input type="checkbox" name="" class="to-do-complete-checkbox" id="ID PLACEHOLDER">
                    </div>
                    <button class="to-do-task-change-display">
                        <img src="assets/chevron-down.png" alt="Change task display button">
                    </button>
                </div>
                <div class="to-do-due-date-section to-do-task-subcontainer">
                    <p class="to-do-due-date">DUE DATE PLACEHOLDER</p>
                    <button class="edit-task-due-date edit-task">
                        <img src="assets/pencil.png" alt="Edit task due date button">
                    </button>
                </div>
            </div>
            <div class="to-do-description-section to-do-task-subcontainer">
                <p class="to-do-description">DESCRIPTION PLACEHOLDER</p>
                <button class="edit-task-description edit-task">
                    <img src="assets/pencil.png" alt="Edit task description button">
                </button>
            </div>
            <div class="to-do-notes-section to-do-task-subcontainer">
                <p class="to-do-notes">NOTES PLACEHOLDER</p>
                <button class="edit-task-notes edit-task">
                    <img src="assets/pencil.png" alt="Edit task notes button">
                </button>
            </div>
            <div action="" class="checklist">
                <div class="checklist-header">
                    <legend class="checklist-label">Checklist</legend>
                    <button class="add-checklist-task" type="button">
                        <img src="assets/plus.png" alt="Add checklist task button">
                    </button>
                </div>
            </div>
        `;
        const titleDOM = newTaskNode.querySelector(".to-do-title");
        titleDOM.textContent = newTaskTitle;
        const dueDateDOM = newTaskNode.querySelector(".to-do-due-date");
        dueDateDOM.textContent = "Due On: " + newTaskDueDate;
        const descriptionDOM = newTaskNode.querySelector(".to-do-description");
        descriptionDOM.textContent = "Description: " + newTaskDescription;
        const notesDOM = newTaskNode.querySelector(".to-do-notes");
        notesDOM.textContent = "Notes: " + newTaskNotes;
        toDoContent.appendChild(newTaskNode);
        const completeLabel = newTaskNode.querySelector("label");
        completeLabel.setAttribute("for", newTaskCompleteID);
        const completeCheckbox = newTaskNode.querySelector(".to-do-complete-checkbox");
        completeCheckbox.setAttribute("id", newTaskCompleteID);
        return newTaskNode;
    }
    const insertTaskInputElement = (event) => {
        const taskSubcontainer = helperFunctions.ensureCorrectSubcontainer(event);
        const inputElement = document.createElement("input");
        inputElement.classList.add("task-input");
        inputElement.setAttribute("type", "text");
        taskSubcontainer.insertBefore(inputElement, taskSubcontainer.firstChild);
        inputElement.focus();
        return inputElement;
    };
    const setTaskInputElementValue = (event, inputElement) => {
        const taskObject = helperFunctions.getTargetTaskObject(event);
        const buttonType = helperFunctions.getButtonType(event);
        let taskSubcontent = undefined;
        if (buttonType.includes("edit-task-title")) {
            taskSubcontent = taskObject.getTaskTitle();
        } else if (buttonType.includes("edit-task-due-date")) {
            taskSubcontent = taskObject.getTaskDueDate();
        } else if (buttonType.includes("edit-task-description")) {
            taskSubcontent = taskObject.getTaskDescription();
        } else if (buttonType.includes("edit-task-notes")) {
            taskSubcontent = taskObject.getTaskNotes();
        };
        inputElement.value = taskSubcontent;
    }
    const insertTaskSubcontentElement = (event) => {
        const taskSubcontainer = helperFunctions.ensureCorrectSubcontainer(event);
        const taskObject = helperFunctions.getTargetTaskObject(event);
        const taskSubcontainerType = helperFunctions.getSubcontainerType(event);
        let taskSubcontentElement = undefined;
        if (taskSubcontainerType.includes("to-do-title-section")) {
            const taskTitle = taskObject.getTaskTitle();
            taskSubcontentElement = document.createElement("h3");
            taskSubcontentElement.classList.add("to-do-title");
            taskSubcontentElement.textContent = taskTitle;
        } else if (taskSubcontainerType.includes("to-do-due-date-section")) {
            const taskDueDate = taskObject.getTaskDueDate();
            taskSubcontentElement = document.createElement("p");
            taskSubcontentElement.classList.add("to-do-due-date");
            taskSubcontentElement.textContent = "Due On: " + taskDueDate;
        } else if (taskSubcontainerType.includes("to-do-description-section")) {
            const taskDescription = taskObject.getTaskDescription();
            taskSubcontentElement = document.createElement("p");
            taskSubcontentElement.classList.add("to-do-description");
            taskSubcontentElement.textContent = "Description: " + taskDescription;
        } else if (taskSubcontainerType.includes("to-do-notes-section")) {
            const taskNotes = taskObject.getTaskNotes();
            taskSubcontentElement = document.createElement("p");
            taskSubcontentElement.classList.add("to-do-notes");
            taskSubcontentElement.textContent = "Notes: " + taskNotes;
        };
        taskSubcontainer.insertBefore(taskSubcontentElement, taskSubcontainer.firstChild);
    }
    const toggleTaskDOMComplete = (taskIndex) => {
        const taskElement = document.querySelector(`[data-task-index='${taskIndex}']`);
        const completeCheckbox = taskElement.querySelector(".to-do-complete-checkbox");
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
        const taskElement = document.querySelector(`[data-task-index='${taskIndex}'`);
        const checklistElement = taskElement.querySelector(".checklist");
        const currentTabObject = toDoList.getCurrentTabObject();
        const taskObject = currentTabObject.getSpecificChecklistTask(taskIndex);
        const checklistTaskObject = taskObject.getSpecificChecklistTask(newChecklistTaskIndex);
        const newChecklistTaskDescription = checklistTaskObject.getTaskDescription();
        const newChecklistTaskCompleted = checklistTaskObject.getCompletedState();
        const newChecklistTaskNode = document.createElement("div");
        newChecklistTaskNode.classList.add("checklist-task");
        newChecklistTaskNode.dataset.checklistTaskIndex = newChecklistTaskIndex;
        newChecklistTaskNode.innerHTML = `
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
        const checklistTaskDescriptionElement = newChecklistTaskNode.querySelector(".checklist-task-description");
        checklistTaskDescriptionElement.textContent = newChecklistTaskDescription;
        checklistElement.appendChild(newChecklistTaskNode);
        return newChecklistTaskNode;
    };
    const insertChecklistTaskInputElement = (event) => {
        const checklistTaskElement = helperFunctions.ensureCorrectChecklistTaskElement(event);
        const checklistCompleteSection = checklistTaskElement.querySelector(".checklist-complete-section");
        const inputElement = document.createElement("input");
        inputElement.classList.add("checklist-input");
        inputElement.setAttribute("type", "text");
        checklistCompleteSection.appendChild(inputElement);
        inputElement.focus();
        return inputElement;
    };
    const setChecklistTaskInputElementValue = (event, inputElement) => {
        const checklistTaskElement = helperFunctions.ensureCorrectChecklistTaskElement(event);
        const checklistTaskIndex = checklistTaskElement.dataset.checklistTaskIndex;
        const taskObject = helperFunctions.getTargetTaskObject(event);
        const checklistTaskObject = taskObject.getSpecificChecklistTask(checklistTaskIndex);
        const checklistTaskDescription = checklistTaskObject.getTaskDescription();
        inputElement.value = checklistTaskDescription;
    };
    const insertChecklistTaskDescriptionElement = (event) => {
        const checklistTaskElement = helperFunctions.ensureCorrectChecklistTaskElement(event);
        const checklistTaskIndex = checklistTaskElement.dataset.checklistTaskIndex;
        const checklistCompleteSection = checklistTaskElement.querySelector(".checklist-complete-section");
        const taskElement = helperFunctions.ensureCorrectTaskElement(event);
        const taskIndex = taskElement.dataset.taskIndex;
        const checklistTaskObject = helperFunctions.getTargetChecklistTaskObject(event);
        const checklistTaskDescription = checklistTaskObject.getTaskDescription();
        const checklistTaskDescriptionElement = document.createElement("label");
        checklistTaskDescriptionElement.setAttribute("for", `checklist-${taskIndex}-${checklistTaskIndex}`);
        checklistTaskDescriptionElement.classList.add("checklist-task-description");
        checklistTaskDescriptionElement.textContent = checklistTaskDescription;
        checklistCompleteSection.appendChild(checklistTaskDescriptionElement);
    };
    const toggleChecklistTaskDOMComplete = (taskIndex, checklistTaskIndex) => {
        const taskElement = document.querySelector(`[data-task-index='${taskIndex}']`);
        const checklistTaskElement = taskElement.querySelector(`[data-checklist-task-index='${checklistTaskIndex}']`);
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
        const taskElement = document.querySelector(`[data-task-index='${taskIndex}']`);
        const currentTabObject = toDoList.getCurrentTabObject();
        const taskObject = currentTabObject.getSpecificChecklistTask(taskIndex);
        const pinButton = taskElement.querySelector(".to-do-pin")
        const pinButtonImage = pinButton.querySelector("img");
        if (taskObject.getPinnedState()) {
            pinButtonImage.setAttribute("src", "./assets/pin-pinned.png");
        } else {
            pinButtonImage.setAttribute("src", "./assets/pin-unpinned.png");
        };
    };
    const shiftTaskElementPosition = (taskIndex) => {
        const taskElement = document.querySelector(`[data-task-index='${taskIndex}']`);
        const currentTabObject = toDoList.getCurrentTabObject();
        const taskObject = currentTabObject.getSpecificChecklistTask(taskIndex);
        const taskElementIndex = taskElement.dataset.taskIndex;
        const taskContentSection = document.querySelector(".to-do-content");
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
    const loadTasksFromNewCurrentTab = () => {
        const currentTabObject = toDoList.getCurrentTabObject();
        const listOfTasks = currentTabObject.getChecklistTasks();
        for (const taskIndex in listOfTasks) {
            const taskObject = listOfTasks[taskIndex]
            if (taskObject !== undefined) {
                const newTaskElement = addNewTaskToDOM(taskIndex);
                setPinButtonImage(newTaskElement);
                rearrangePinnedTasksPosition(newTaskElement);
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
    const setPinButtonImage = (newTaskElement) => {
        const currentTabObject = toDoList.getCurrentTabObject();
        const currentTaskIndex = newTaskElement.dataset.taskIndex;
        const currentTaskObject = currentTabObject.getSpecificChecklistTask(currentTaskIndex);
        const pinButton = newTaskElement.querySelector(".to-do-pin");
        const pinButtonImage = pinButton.querySelector("img");
        if (currentTaskObject.getPinnedState()) {
            pinButtonImage.setAttribute("src", "./assets/pin-pinned.png");
        } else {
            pinButtonImage.setAttribute("src", "./assets/pin-unpinned.png");
        };
    };
    const rearrangePinnedTasksPosition = (newTaskElement) => {
        const currentTabObject = toDoList.getCurrentTabObject();
        const currentTaskIndex = newTaskElement.dataset.taskIndex;
        const currentTaskObject = currentTabObject.getSpecificChecklistTask(currentTaskIndex);
        const taskContentSection = document.querySelector(".to-do-content");
        if (currentTaskObject.getPinnedState()) {
            const listOfPinnedTaskElements = Array.from(document.querySelectorAll(".pinned-task"));
            if (listOfPinnedTaskElements.length === 0) {
                taskContentSection.insertBefore(newTaskElement, taskContentSection.firstElementChild);
            } else {
                const arrayEndIndex = listOfPinnedTaskElements.length - 1;
                const lastPinnedTaskElement = listOfPinnedTaskElements[arrayEndIndex];
                for (const pinnedTaskElement of listOfPinnedTaskElements) {
                    const pinnedTaskElementIndex = pinnedTaskElement.dataset.taskIndex;
                    if (currentTaskIndex < pinnedTaskElementIndex) {
                        taskContentSection.insertBefore(newTaskElement, pinnedTaskElement);
                        break;
                    } else if (pinnedTaskElement === lastPinnedTaskElement) {
                        lastPinnedTaskElement.insertAdjacentElement("afterend", newTaskElement);
                    };
                };
            };
            newTaskElement.classList.add("pinned-task");
        };
    };
    const toggleDisplayTaskDetails = (event) => {
        const taskElement = helperFunctions.ensureCorrectTaskElement(event);
        const taskDescription = taskElement.querySelector(".to-do-description-section");
        const taskNotes = taskElement.querySelector(".to-do-notes-section");
        const taskChecklist = taskElement.querySelector(".checklist");
        const elementsToToggle = [taskDescription, taskNotes, taskChecklist];
        elementsToToggle.forEach((element) => {
            const elementClasses = Array.from(element.classList);
            if (elementClasses.includes("hide-to-do-details")) {
                element.classList.remove("hide-to-do-details");
                element.classList.add("display-to-do-details");
            } else {
                element.classList.add("hide-to-do-details");
                element.classList.remove("display-to-do-details");
            };
        });
    };
    const rotateChevronButton = (event) => {
        const buttonElement = helperFunctions.ensureCorrectButtonElement(event);
        const buttonImage = buttonElement.querySelector("img");
        const buttonImageClass = buttonImage.getAttribute("class");
        if (buttonImageClass === null || buttonImageClass === "rotate-hide-task-details") {
            buttonImage.classList.toggle("rotate-hide-task-details", false);
            buttonImage.classList.add("rotate-display-task-details");
        } else if (buttonImageClass === "rotate-display-task-details") {
            buttonImage.classList.remove("rotate-display-task-details");
            buttonImage.classList.add("rotate-hide-task-details");
        };
    };
    return { addNewTabToDOM, setTabInputElementValue,
        insertTabInputElement, insertTabNameElement, setDefaultCurrentTabDOM,
        setCurrentTabDOM, setFirstTabToCurrentTab, addNewTaskToDOM,
        insertTaskInputElement, setTaskInputElementValue, insertTaskSubcontentElement,
        toggleTaskDOMComplete, addNewChecklistTaskToDOM, insertChecklistTaskInputElement,
        setChecklistTaskInputElementValue, insertChecklistTaskDescriptionElement,
        toggleChecklistTaskDOMComplete, changePinButtonImage, shiftTaskElementPosition,
        loadTasksFromNewCurrentTab, toggleDisplayTaskDetails, rotateChevronButton, };
})();

export { DOMControllerAddEdit };