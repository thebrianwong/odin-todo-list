import { checklistObject } from "./checklist_object";
import { DOMUpdateController } from "./DOM_controller_add_edit";
import { eventBundler } from "./event_bundler_object";

const eventAssigner = (() => {
    const addNewTabListener = () => {
        const addTabButton = document.querySelector(".add-tab");
        addTabButton.addEventListener("click", eventBundler.addTab);
    };
    const addEditTabButtonListener = () => {
        const tabEditButtons = Array.from(document.querySelectorAll(".edit-tab"));
        for (const button of tabEditButtons) {
            button.addEventListener("click", eventBundler.insertTabInputElement);
        }
    }
    const addTabInputListener = (inputElement) => {
        inputElement.addEventListener("keydown", eventBundler.updateTab)
    }
    const addEditTabButtonListenerForNewTabs = (tabElement) => {
        const tabEditButton = tabElement.querySelector(".edit-tab");
        tabEditButton.addEventListener("click", eventBundler.insertTabInputElement);
    };
    const addRemoveTabButtonListenerForInitialTabs = () => {
        const tabRemoveButtons = Array.from(document.querySelectorAll(".remove-tab"));
        for (const button of tabRemoveButtons) {
            button.addEventListener("click", eventBundler.removeTab);
        };
    };
    const addRemoveTabButtonListenerForNewTabs = (tabElement) => {
        const tabRemoveButton = tabElement.querySelector(".remove-tab");
        tabRemoveButton.addEventListener("click", eventBundler.removeTab);
    }
    const addSwitchTabListenerForInitialTabs = () => {
        const tabSwitchButtons = Array.from(document.querySelectorAll(".switch-tab"));
        for (const button of tabSwitchButtons) {
            button.addEventListener("click", eventBundler.switchTab);
        };
    }
    const addSwitchTabListenerForNewTabs = (tabElement) => {
        const tabSwitchButton = tabElement.querySelector(".switch-tab");
        tabSwitchButton.addEventListener("click", eventBundler.switchTab)
    }
    const addNewTaskListener = () => {
        const newTaskButton = document.querySelector(".new-to-do-task");
        newTaskButton.addEventListener("click", eventBundler.newTask);
    }
    const addRemoveTaskButtonListener = (scope=document) => {
        const taskRemoveButtons = Array.from(scope.querySelectorAll(".to-do-remove-task"));
        for (const button of taskRemoveButtons) {
            button.addEventListener("click", eventBundler.removeTask);
        };
    };
    // remove
    const addRemoveTaskButtonListenerForNewTasks = (taskElement) => {
        const taskRemoveButton = taskElement.querySelector(".to-do-remove-task");
        taskRemoveButton.addEventListener("click", eventBundler.removeTask);
    };
    //
    const addEditTaskListeners = (scope=document) => {
        const taskEditButtons = Array.from(scope.querySelectorAll(".edit-task"));
        for (const button of taskEditButtons) {
            button.addEventListener("click", eventBundler.insertTaskInputElement);
        };
    };
    const addTaskInputListener = (inputElement) => {
        inputElement.addEventListener("keydown", eventBundler.updateTask);
    };
    // remove
    const addEditTaskTitleListenerForNewTasks = (taskElement) => {
        const taskEditButtons = Array.from(taskElement.querySelectorAll(".edit-task"));
        for (const button of taskEditButtons) {
            button.addEventListener("click", eventBundler.insertTaskInputElement);
        };
    }
    //
    const addToggleTaskCompleteListener = (scope=document) => {
        const taskCompleteCheckboxes = scope.querySelectorAll(".to-do-complete-checkbox");
        for (const checkbox of taskCompleteCheckboxes) {
            checkbox.addEventListener("click", eventBundler.toggleTaskComplete);
        };
    };
    // remove
    const addToggleTaskCompleteListenerForNewTasks = (newTaskNode) => {
        const taskCompleteCheckbox = newTaskNode.querySelector(".to-do-complete-checkbox");
        taskCompleteCheckbox.addEventListener("click", eventBundler.toggleTaskComplete)
    }
    //
    const addNewChecklistTaskListener = (scope=document) => {
        const newChecklistTaskButtons = scope.querySelectorAll(".add-checklist-task");
        for (const button of newChecklistTaskButtons) {
            button.addEventListener("click", eventBundler.addNewChecklistTask)
        };
    };
    // remove
    const addNewChecklistTaskListenerForNewTasks = (newChecklistTaskNode) => {
        const addChecklistTaskButton = newChecklistTaskNode.querySelector(".add-checklist-task");
        addChecklistTaskButton.addEventListener("click", eventBundler.addNewChecklistTask)
    };
    //
    const addEditChecklistTaskListeners = (scope=document) => {
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
    return { addNewTabListener, addEditTabButtonListener, addTabInputListener,
        addEditTabButtonListenerForNewTabs, addRemoveTabButtonListenerForInitialTabs,
        addRemoveTabButtonListenerForNewTabs, addSwitchTabListenerForInitialTabs,
        addSwitchTabListenerForNewTabs, addNewTaskListener, addRemoveTaskButtonListener,
        addRemoveTaskButtonListenerForNewTasks, addEditTaskListeners,
        addTaskInputListener, addEditTaskTitleListenerForNewTasks,
        addToggleTaskCompleteListener, addToggleTaskCompleteListenerForNewTasks, 
        addNewChecklistTaskListener, addNewChecklistTaskListenerForNewTasks,
        addEditChecklistTaskListeners, addChecklistTaskInputListener, addToggleChecklistTaskCompleteListener, 
        addRemoveChecklistTaskListener, };
})();

export { eventAssigner };