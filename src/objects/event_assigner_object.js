import { eventBundler } from "./event_bundler_object";

const eventAssigner = (() => {
    const addNewTabListener = () => {
        const addTabButton = document.querySelector(".add-tab");
        addTabButton.addEventListener("click", eventBundler.addTab);
    };
    const addEditTabButtonListener = (scope=document) => {
        const tabEditButtons = Array.from(scope.querySelectorAll(".edit-tab"));
        for (const button of tabEditButtons) {
            button.addEventListener("click", eventBundler.insertTabInputElement);
        }
    }
    const addTabInputListener = (inputElement) => {
        inputElement.addEventListener("keydown", eventBundler.updateTab)
    }
    const addRemoveTabButtonListener = (scope=document) => {
        const tabRemoveButtons = Array.from(scope.querySelectorAll(".remove-tab"));
        for (const button of tabRemoveButtons) {
            button.addEventListener("click", eventBundler.removeTab);
        };
    };
    const addSwitchTabListener = (scope=document) => {
        const tabSwitchButtons = Array.from(scope.querySelectorAll(".switch-tab"));
        for (const button of tabSwitchButtons) {
            button.addEventListener("click", eventBundler.switchTab);
        };
    }
    const addNewTaskListener = () => {
        const newTaskButton = document.querySelector(".new-to-do-task");
        newTaskButton.addEventListener("click", eventBundler.addTask);
    }
    const addEditTaskListener = (scope=document) => {
        const taskEditButtons = Array.from(scope.querySelectorAll(".edit-task"));
        for (const button of taskEditButtons) {
            button.addEventListener("click", eventBundler.insertTaskInputElement);
        };
    };
    const addTaskInputListener = (inputElement) => {
        inputElement.addEventListener("keydown", eventBundler.updateTask);
    };
    const addToggleTaskPinListener = (scope=document) => {
        const taskPinButtons = scope.querySelectorAll(".to-do-pin");
        for (const button of taskPinButtons) {
            button.addEventListener("click", eventBundler.toggleTaskPin);
        };
    };
    const addToggleTaskCompleteListener = (scope=document) => {
        const taskCompleteCheckboxes = scope.querySelectorAll(".to-do-complete-checkbox");
        for (const checkbox of taskCompleteCheckboxes) {
            checkbox.addEventListener("click", eventBundler.toggleTaskComplete);
        };
    };
    const addRemoveTaskButtonListener = (scope=document) => {
        const taskRemoveButtons = Array.from(scope.querySelectorAll(".remove-task"));
        for (const button of taskRemoveButtons) {
            button.addEventListener("click", eventBundler.removeTask);
        };
    };
    const addNewChecklistTaskListener = (scope=document) => {
        const newChecklistTaskButtons = scope.querySelectorAll(".add-checklist-task");
        for (const button of newChecklistTaskButtons) {
            button.addEventListener("click", eventBundler.addNewChecklistTask)
        };
    };
    const addEditChecklistTaskListener = (scope=document) => {
        const checklistEditButtons = Array.from(scope.querySelectorAll(".edit-checklist-task"));
        for (const button of checklistEditButtons) {
            button.addEventListener("click", eventBundler.insertChecklistTaskInputElement);
        };
    };
    const addChecklistTaskInputListener = (inputElement) => {
        inputElement.addEventListener("keydown", eventBundler.updateChecklistTask);
    };
    const addToggleChecklistTaskCompleteListener = (scope=document) => {
        const checklistCompleteCheckboxes = scope.querySelectorAll(".checklist-complete-checkbox");
        for (const checkbox of checklistCompleteCheckboxes) {
            checkbox.addEventListener("click", eventBundler.toggleChecklistTaskComplete);
        };
    };
    const addRemoveChecklistTaskListener = (scope=document) => {
        const checklistTaskRemoveButtons = scope.querySelectorAll(".remove-checklist-task");
        for (const button of checklistTaskRemoveButtons) {
            button.addEventListener("click", eventBundler.removeChecklistTask);
        };
    };
    const addToggleDisplayTaskDetailsListener = (scope=document) => {
        const taskToggleDisplayButtons = scope.querySelectorAll(".to-do-task-change-display");
        for (const button of taskToggleDisplayButtons) {
            button.addEventListener("click", eventBundler.toggleDisplayTaskDetails);
        }
    };
    return {
        addNewTabListener,
        addEditTabButtonListener,
        addTabInputListener,
        addRemoveTabButtonListener,
        addSwitchTabListener,
        addNewTaskListener,
        addEditTaskListener,
        addTaskInputListener,
        addToggleTaskPinListener,
        addToggleTaskCompleteListener,
        addRemoveTaskButtonListener,
        addNewChecklistTaskListener,
        addEditChecklistTaskListener,
        addChecklistTaskInputListener,
        addToggleChecklistTaskCompleteListener,
        addRemoveChecklistTaskListener,
        addToggleDisplayTaskDetailsListener
    };
})();

export { eventAssigner };