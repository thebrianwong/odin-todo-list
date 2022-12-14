import { eventAssigner } from "./event_assigner_object";
import { toDoList } from "./todo_list_object";
import { objectControllerAddEditObject } from "./object_controller_add_edit_object";
import { DOMControllerAddEdit } from "./DOM_controller_add_edit";
import { DOMControllerRemove } from "./DOM_controller_remove";
import { objectControllerRemoveObject } from "./object_controller_remove_object";
import { helperFunctions } from "./helper_functions";
import { todoListStorage } from "./todo_list_storage_object";

const eventBundler = (() => {
    const addTab = (event, tabName="New Tab") => {
        const newTabIndex = objectControllerAddEditObject.addNewTabToTodoList(tabName);
        const newTabElement = DOMControllerAddEdit.addNewTabToDOM(newTabIndex);
        addTabListeners(newTabElement);
        if (!todoListStorage.isLoading()) {
            todoListStorage.addTab(newTabIndex);
            if (helperFunctions.checkIfOnlyOneTab()) {
                const firstTabIndex = objectControllerAddEditObject.setFirstTabToCurrentTab();
                DOMControllerAddEdit.addCurrentTabIndicator()
                todoListStorage.setCurrentTab(firstTabIndex);
            };
        }
        return newTabIndex
    }
    const insertTabInputElement = (event) => {
        if (!helperFunctions.checkForExistingInputElement(event, "Tab")) {
            const tabIndex = helperFunctions.getTabIndex(event);
            const inputElement = DOMControllerAddEdit.insertTabInputElement(tabIndex);
            DOMControllerRemove.removeTabNameElement(tabIndex);
            DOMControllerAddEdit.setTabInputElementValue(tabIndex);
            eventAssigner.addTabInputListener(inputElement);
        };
    }
    const updateTab = (event) => {
        if (event.code === 'Enter') {
            const tabIndex = helperFunctions.getTabIndex(event);
            const newTabName = helperFunctions.getNewValue(event);
            objectControllerAddEditObject.editTabName(tabIndex, newTabName);
            const tabElement = DOMControllerAddEdit.insertTabNameElement(tabIndex);
            DOMControllerRemove.removeTabInputElement(tabIndex);
            eventAssigner.addSwitchTabListener(tabElement);
            todoListStorage.setTabName(tabIndex);
        };
    };
    const removeTab = (event) => {
        const tabIndex = helperFunctions.getTabIndex(event);
        objectControllerRemoveObject.removeTabFromTodoList(tabIndex);
        DOMControllerRemove.removeTabElementFromDOM(tabIndex);
        todoListStorage.removeTab(tabIndex);
        if (helperFunctions.checkIfWasCurrentTab(event)) {
            const firstTabIndex = objectControllerAddEditObject.setFirstTabToCurrentTab();
            DOMControllerAddEdit.addCurrentTabIndicator()
            DOMControllerRemove.removeAllTaskElements();
            todoListStorage.setCurrentTab(firstTabIndex);
            if (!helperFunctions.checkIfNoMoreTabs()) {
                DOMControllerAddEdit.loadTasksFromNewCurrentTab();
            }
        }
    };
    const switchTab = (event) => {
        if (!helperFunctions.checkIfWasCurrentTab(event)) {
            const tabIndex = helperFunctions.getTabIndex(event);
            objectControllerAddEditObject.updateCurrentTab(tabIndex);
            DOMControllerRemove.resetCurrentTabStatus();
            DOMControllerAddEdit.addCurrentTabIndicator();
            DOMControllerRemove.removeAllTaskElements();
            DOMControllerAddEdit.loadTasksFromNewCurrentTab();
            todoListStorage.setCurrentTab(tabIndex);
        }
    };
    const addTabListeners = (newTabElement) => {
        eventAssigner.addEditTabButtonListener(newTabElement);
        eventAssigner.addRemoveTabButtonListener(newTabElement);
        eventAssigner.addSwitchTabListener(newTabElement);
    };
    const addTask = (
        event,
        tabIndex=toDoList.getCurrentTabIndex(),
        title="New Task Title",
        dueDate="Task Due Date",
        description="Task Description",
        notes="Task Notes",
        pinned=false,
        completed=false
    ) => {
        if (toDoList.getCurrentTabIndex() === null) {
            loadInInstructionsPage();
            return;
        };
        const newTaskIndex = objectControllerAddEditObject.addNewTaskToTab(
            tabIndex,
            title,
            dueDate,
            description,
            notes,
            pinned,
            completed
        );
        const newTaskElement = DOMControllerAddEdit.addNewTaskToDOM(newTaskIndex);
        addTaskListeners(newTaskElement);
        if (!todoListStorage.isLoading()) {
            todoListStorage.addTask(toDoList.getCurrentTabIndex(), newTaskIndex);
        };
        return newTaskIndex;
    }
    const insertTaskInputElement = (event) => {
        if (!helperFunctions.checkForExistingInputElement(event, "Task")) {
            const taskIndex = helperFunctions.getTaskIndex(event);
            const taskSubcontainerType = helperFunctions.getTaskSubcontainerType(event);
            DOMControllerRemove.removeTaskSubcontentElementFromDOM(taskIndex, taskSubcontainerType);
            const inputElement = DOMControllerAddEdit.insertTaskInputElement(taskIndex, taskSubcontainerType);
            DOMControllerAddEdit.setTaskInputElementValue(taskIndex, taskSubcontainerType);
            eventAssigner.addTaskInputListener(inputElement);
        };
    }
    const updateTask = (event) => {
        if (event.code === "Enter") {
            const taskIndex = helperFunctions.getTaskIndex(event);
            const taskSubcontainerType = helperFunctions.getTaskSubcontainerType(event);
            const newTaskSubcontentValue = helperFunctions.getNewValue(event);
            objectControllerAddEditObject.editTaskInfo(taskIndex, taskSubcontainerType, newTaskSubcontentValue);
            DOMControllerAddEdit.insertTaskSubcontentElement(taskIndex, taskSubcontainerType);
            DOMControllerRemove.removeTaskInputElement(taskIndex, taskSubcontainerType);
            todoListStorage.setTaskSubcontainerValue(toDoList.getCurrentTabIndex(), taskIndex, taskSubcontainerType);
        };
    };
    const toggleTaskPin = (event) => {
        const taskIndex = helperFunctions.getTaskIndex(event);
        DOMControllerAddEdit.toggleAnimations(taskIndex, "Enable");
        objectControllerAddEditObject.toggleTaskPin(taskIndex);
        DOMControllerAddEdit.changePinButtonImage(taskIndex);
        DOMControllerAddEdit.shiftTaskElementPosition(taskIndex);
        todoListStorage.toggleTaskPinned(toDoList.getCurrentTabIndex(), taskIndex);
    };
    const toggleTaskComplete = (event) => {
        const taskIndex = helperFunctions.getTaskIndex(event);
        objectControllerAddEditObject.toggleTaskComplete(taskIndex);
        DOMControllerAddEdit.toggleTaskDOMComplete(taskIndex);
        todoListStorage.toggleTaskCompleted(toDoList.getCurrentTabIndex(), taskIndex);
    };
    const removeTask = (event) => {
        const taskIndex = helperFunctions.getTaskIndex(event);
        objectControllerRemoveObject.removeTaskFromTab(taskIndex);
        DOMControllerRemove.removeTaskElementFromDOM(taskIndex);
        todoListStorage.removeTask(toDoList.getCurrentTabIndex(), taskIndex);
    };
    const addTaskListeners = (newTaskElement) => {
        eventAssigner.addRemoveTaskButtonListener(newTaskElement);
        eventAssigner.addEditTaskListener(newTaskElement);
        eventAssigner.addToggleTaskCompleteListener(newTaskElement);
        eventAssigner.addNewChecklistTaskListener(newTaskElement);
        eventAssigner.addToggleTaskPinListener(newTaskElement);
        eventAssigner.addToggleDisplayTaskDetailsListener(newTaskElement);
    };
    const addNewChecklistTask = (event) => {
        const tabIndex = toDoList.getCurrentTabIndex();
        const taskIndex = helperFunctions.getTaskIndex(event);
        const newChecklistTaskIndex = objectControllerAddEditObject.addNewChecklistTaskToTask(tabIndex, taskIndex);
        const newChecklistTaskElement = DOMControllerAddEdit.addNewChecklistTaskToDOM(taskIndex, newChecklistTaskIndex);
        addChecklistTaskListeners(newChecklistTaskElement);
        if (!todoListStorage.isLoading()) {
            todoListStorage.addChecklistTask(toDoList.getCurrentTabIndex(), taskIndex, newChecklistTaskIndex);
        };
    };
    const insertChecklistTaskInputElement = (event) => {
        if (!helperFunctions.checkForExistingInputElement(event, "Checklist Task")) {
            const taskIndex = helperFunctions.getTaskIndex(event);
            const checklistTaskIndex = helperFunctions.getChecklistTaskIndex(event);
            DOMControllerRemove.removeChecklistTaskDescriptionDOM(taskIndex, checklistTaskIndex);
            const inputElement = DOMControllerAddEdit.insertChecklistTaskInputElement(taskIndex, checklistTaskIndex);
            DOMControllerAddEdit.setChecklistTaskInputElementValue(taskIndex, checklistTaskIndex);
            eventAssigner.addChecklistTaskInputListener(inputElement);
        };
    };
    const updateChecklistTask = (event) => {
        if (event.code === "Enter") {
            const taskIndex = helperFunctions.getTaskIndex(event);
            const checklistTaskIndex = helperFunctions.getChecklistTaskIndex(event);
            const newDescriptionValue = helperFunctions.getNewValue(event);
            objectControllerAddEditObject.editChecklistTaskDescription(taskIndex, checklistTaskIndex, newDescriptionValue);
            DOMControllerAddEdit.insertChecklistTaskDescriptionElement(taskIndex, checklistTaskIndex);
            DOMControllerRemove.removeChecklistTaskInputElement(taskIndex, checklistTaskIndex);
            todoListStorage.setChecklistTaskDescription(toDoList.getCurrentTabIndex(), taskIndex, checklistTaskIndex);
        };
    };
    const toggleChecklistTaskComplete = (event) => {
        const taskIndex = helperFunctions.getTaskIndex(event);
        const checklistTaskIndex = helperFunctions.getChecklistTaskIndex(event);
        objectControllerAddEditObject.toggleChecklistTaskComplete(taskIndex, checklistTaskIndex);
        DOMControllerAddEdit.toggleChecklistTaskDOMComplete(taskIndex, checklistTaskIndex);
        todoListStorage.toggleChecklistTaskCompleted(toDoList.getCurrentTabIndex(), taskIndex, checklistTaskIndex);
    };
    const removeChecklistTask = (event) => {
        const taskIndex = helperFunctions.getTaskIndex(event);
        const checklistTaskIndex = helperFunctions.getChecklistTaskIndex(event);
        objectControllerRemoveObject.removeChecklistTaskFromTask(taskIndex, checklistTaskIndex);
        DOMControllerRemove.removeChecklistTaskElementDOM(taskIndex, checklistTaskIndex);
        todoListStorage.removeChecklistTask(toDoList.getCurrentTabIndex(), taskIndex, checklistTaskIndex);
    };
    const addChecklistTaskListeners = (newChecklistTaskElement) => {
        eventAssigner.addEditChecklistTaskListener(newChecklistTaskElement);
        eventAssigner.addToggleChecklistTaskCompleteListener(newChecklistTaskElement);
        eventAssigner.addRemoveChecklistTaskListener(newChecklistTaskElement);
    };
    const toggleDisplayTaskDetails = (event) => {
        const taskIndex = helperFunctions.getTaskIndex(event);
        if (!helperFunctions.tryingToDoubleClick(taskIndex)) {
            DOMControllerAddEdit.toggleAnimations(taskIndex, "Disable");
            DOMControllerAddEdit.toggleDisplayTaskDetails(taskIndex);
            DOMControllerAddEdit.rotateChevronButton(taskIndex);
        };
    };
    const loadInInstructionsPage = () => {
        const tabIndex = addTab(event, "Instructions");
        const taskIndex = addTask(
            event,
            tabIndex,
            "Quick Tips! Click the pin button to pin a task to the top of the list.",
            "Tomorrow, next week, or whenever your task is due, you can add it here! Click the arrow button to toggle between showing and hiding task details.",
            "Add a description of your task here! Click the pencil buttons to edit the various parts of your task.",
            "Jot down some notes here! Mark your task as complete when you're done, or remove it from the list by clicking the X button.",
            false,
            false
        );
        DOMControllerAddEdit.toggleTaskDOMComplete(taskIndex);
        DOMControllerAddEdit.changePinButtonImage(taskIndex);
        DOMControllerAddEdit.shiftTaskElementPosition(taskIndex);
        addLoadedInChecklistTask(
            tabIndex,
            taskIndex,
            "If your task has multiple steps, try breaking them down into a checklist! Click the plus sign button to add steps as needed.",
            false
        );
        addLoadedInChecklistTask(
            tabIndex,
            taskIndex,
            "Have a new task you want to keep track of? Add it to the list by clicking on the 'New Task' button below!",
            false
        );
        addLoadedInChecklistTask(tabIndex,
            taskIndex,
            "Organize the different types of tasks in your life by creating themed tabs. Create a new tab by clicking on the plus sign button at the top of the list. Change tabs by clicking on different tab names.",
            false
        );
    };
    const addLoadedInChecklistTask = (tabIndex, taskIndex, description, completed) => {
        const checklistTaskIndex = objectControllerAddEditObject.addNewChecklistTaskToTask(tabIndex, taskIndex, description, completed);
        const checklistTaskElement = DOMControllerAddEdit.addNewChecklistTaskToDOM(taskIndex, checklistTaskIndex);
        DOMControllerAddEdit.toggleChecklistTaskDOMComplete(taskIndex, checklistTaskIndex);
        addChecklistTaskListeners(checklistTaskElement);
        if (!todoListStorage.isLoading()) {
            todoListStorage.addChecklistTask(tabIndex, taskIndex, checklistTaskIndex)
        };
    };
    const loadInLocalStorage = () => {
        todoListStorage.toggleLoading();
        loadInCurrentTabIndex();
        loadInTabObjects()
        todoListStorage.toggleLoading();
    };
    const loadInCurrentTabIndex = () => {
        const currentTabIndex = todoListStorage.getCurrentTabIndex();
        toDoList.setCurrentTabIndex(currentTabIndex);
    };
    const loadInTabObjects = () => {
        const tabObjects = todoListStorage.getTabObjects();
        for (const tabKey in tabObjects) {
            if (tabObjects[tabKey] === null) {
                toDoList.addTask(undefined);
            } else {
                const tabTitle = todoListStorage.getTabTitle(tabKey)
                const tabIndex = addTab(event, tabTitle)
                loadInTaskObjects(tabIndex, tabKey);
            };
        };
        DOMControllerAddEdit.addCurrentTabIndicator()
    };
    const loadInTaskObjects = (tabIndex, tabKey) => {
        const tabObject = helperFunctions.getTabObject(tabIndex);
        const taskObjects = todoListStorage.getTaskObjects(tabIndex);
        for (const taskKey in taskObjects) {
            if (taskObjects[taskKey] === null) {
                tabObject.addTask(undefined);
            } else {
                const taskValues = todoListStorage.getTaskValues(tabKey, taskKey)
                const taskTitle = taskValues[0];
                const taskDueDate = taskValues[1];
                const taskDescription = taskValues[2];
                const taskNotes = taskValues[3];
                const taskPinned = taskValues[4];
                const taskCompleted = taskValues[5];
                let taskIndex = undefined;
                if (tabIndex === toDoList.getCurrentTabIndex()) {
                    taskIndex = addTask(
                        event,
                        tabIndex,
                        taskTitle,
                        taskDueDate,
                        taskDescription,
                        taskNotes,
                        taskPinned,
                        taskCompleted
                    );
                    DOMControllerAddEdit.toggleTaskDOMComplete(taskIndex);
                    DOMControllerAddEdit.changePinButtonImage(taskIndex);
                    DOMControllerAddEdit.shiftTaskElementPosition(taskIndex);
                } else {
                    taskIndex = objectControllerAddEditObject.addNewTaskToTab(
                        tabIndex,
                        taskTitle,
                        taskDueDate,
                        taskDescription,
                        taskNotes,
                        taskPinned,
                        taskCompleted
                    );
                }
                loadInChecklistTaskObjects(tabIndex, tabKey, taskIndex, taskKey);
            };
        };
    };
    const loadInChecklistTaskObjects = (tabIndex, tabKey, taskIndex, taskKey) => {
        const taskObject = helperFunctions.getTaskObject(tabIndex, taskIndex);
        const checklistTaskObjects = todoListStorage.getChecklistTaskObjects(tabIndex, taskIndex);
        for (const checklistTaskKey in checklistTaskObjects) {
            if (checklistTaskObjects[checklistTaskKey] === null) {
                taskObject.addTask(undefined);
            } else {
                const checklistTaskValues = todoListStorage.getChecklistTaskValues(tabKey, taskKey, checklistTaskKey);
                const checklistTaskDescription = checklistTaskValues[0];
                const checklistTaskCompleted = checklistTaskValues[1];
                let checklistTaskIndex = undefined;
                if (tabIndex === toDoList.getCurrentTabIndex()) {
                    checklistTaskIndex = addLoadedInChecklistTask(tabIndex, taskIndex, checklistTaskDescription, checklistTaskCompleted)
                } else {
                    checklistTaskIndex = objectControllerAddEditObject.addNewChecklistTaskToTask(tabIndex, taskIndex, checklistTaskDescription, checklistTaskCompleted);
                };
            };
        };
    };
    const loadInInitialListeners = () => {
        eventAssigner.addNewTabListener();
        eventAssigner.addNewTaskListener();
    };
    const loadInPage = () => {
        loadInInitialListeners();
        if (todoListStorage.checkForExistingStorage()) {
            loadInLocalStorage();
        } else {
            todoListStorage.initializeTodoList();;
            loadInInstructionsPage();
        };
    };
    return {
        addTab,
        insertTabInputElement,
        updateTab,
        switchTab,
        removeTab,
        addTabListeners,
        addTask,
        insertTaskInputElement,
        updateTask,
        toggleTaskPin,
        toggleTaskComplete,
        removeTask,
        addTaskListeners,
        addNewChecklistTask,
        insertChecklistTaskInputElement,
        updateChecklistTask,
        toggleChecklistTaskComplete,
        removeChecklistTask,
        addChecklistTaskListeners,
        toggleDisplayTaskDetails,
        loadInInstructionsPage,
        loadInLocalStorage,
        loadInTabObjects,
        loadInInitialListeners,
        loadInPage,
    };
})();

export { eventBundler };