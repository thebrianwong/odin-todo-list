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
    const addRemoveTaskButtonListenerForInitialTabs = () => {
        const taskRemoveButtons = Array.from(document.querySelectorAll(".to-do-remove-task"));
        for (const button of taskRemoveButtons) {
            button.addEventListener("click", eventBundler.removeTask);
        };
    };
    const addRemoveTaskButtonListenerForNewTasks = (taskElement) => {
        const taskRemoveButton = taskElement.querySelector(".to-do-remove-task");
        taskRemoveButton.addEventListener("click", eventBundler.removeTask);
    };
    const addEditTaskListenersForInitialTasks = () => {
        const taskEditButtons = Array.from(document.querySelectorAll(".edit-task"));
        for (const button of taskEditButtons) {
            button.addEventListener("click", eventBundler.insertTaskInputElement);
        };
    };
    const addTaskInputListener = (inputElement) => {
        inputElement.addEventListener("keydown", eventBundler.updateTask);
    };
    const addEditTaskTitleListenerForNewTasks = (taskElement) => {
        const taskEditButtons = Array.from(taskElement.querySelectorAll(".edit-task"));
        for (const button of taskEditButtons) {
            button.addEventListener("click", eventBundler.insertTaskInputElement);
        };
    }
    const addToggleTaskCompleteListenerForInitialTasks = () => {
        const taskCompleteCheckboxes = document.querySelectorAll(".to-do-complete-checkbox");
        for (const checkbox of taskCompleteCheckboxes) {
            checkbox.addEventListener("click", eventBundler.toggleTaskComplete);
        };
    };
    const addToggleTaskCompleteListenerForNewTasks = (newTaskNode) => {
        const taskCompleteCheckbox = newTaskNode.querySelector(".to-do-complete-checkbox");
        taskCompleteCheckbox.addEventListener("click", eventBundler.toggleTaskComplete)
    }
    const addNewChecklistTaskListenerForInitialTasks = () => {
        const newChecklistTaskButtons = document.querySelectorAll(".add-checklist-task");
        for (const button of newChecklistTaskButtons) {
            button.addEventListener("click", eventBundler.addNewChecklistTask)
        };
    };
    const addNewChecklistTaskListenerForNewTasks = (newChecklistTaskNode) => {
        const addChecklistTaskButton = newChecklistTaskNode.querySelector(".add-checklist-task");
        addChecklistTaskButton.addEventListener("click", eventBundler.addNewChecklistTask)
    };
    const addEditChecklistTaskListenersForInitialTasks = () => {
        const checklistEditButtons = Array.from(document.querySelectorAll(".edit-checklist-task"));
        for (const button of checklistEditButtons) {
            button.addEventListener("click", eventBundler.insertChecklistTaskInputElement);
        };
    };
    return { addNewTabListener, addEditTabButtonListener, addTabInputListener,
        addEditTabButtonListenerForNewTabs, addRemoveTabButtonListenerForInitialTabs,
        addRemoveTabButtonListenerForNewTabs, addSwitchTabListenerForInitialTabs,
        addSwitchTabListenerForNewTabs, addNewTaskListener, addRemoveTaskButtonListenerForInitialTabs,
        addRemoveTaskButtonListenerForNewTasks, addEditTaskListenersForInitialTasks,
        addTaskInputListener, addEditTaskTitleListenerForNewTasks,
        addToggleTaskCompleteListenerForInitialTasks, addToggleTaskCompleteListenerForNewTasks, 
        addNewChecklistTaskListenerForInitialTasks, addNewChecklistTaskListenerForNewTasks, addEditChecklistTaskListenersForInitialTasks, };
})();

export { eventAssigner };