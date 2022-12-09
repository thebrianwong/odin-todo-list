import { toDoList } from "./todo_list_object";

const objectControllerRemoveObject = (() => {
    const removeTabFromTodoList = (tabIndex) => {
        toDoList.removeTask(tabIndex);
    };
    const removeTaskFromTab = (taskIndex) => {
        const currentTabObject = toDoList.getCurrentTabObject();
        currentTabObject.removeTask(taskIndex);
    }
    const removeChecklistTaskFromTask = (taskIndex, checklistTaskIndex) => {
        const currentTabObject = toDoList.getCurrentTabObject();
        const taskObject = currentTabObject.getSpecificChecklistTask(taskIndex);
        taskObject.removeTask(checklistTaskIndex);
    };
    return {
        removeTabFromTodoList,
        removeTaskFromTab,
        removeChecklistTaskFromTask
    };
})();

export { objectControllerRemoveObject };