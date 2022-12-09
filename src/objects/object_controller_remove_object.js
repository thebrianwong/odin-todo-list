import { toDoList } from "./todo_list_object";

const objectControllerRemoveObject = (() => {
    const removeTabFromTodoArray = (tabIndex) => {
        toDoList.removeTask(tabIndex);
    };
    const removeTaskFromTabArray = (taskIndex) => {
        const currentTabObject = toDoList.getCurrentTabObject();
        currentTabObject.removeTask(taskIndex);
    }
    const removeChecklistTaskFromTaskArray = (taskIndex, checklistTaskIndex) => {
        const currentTabObject = toDoList.getCurrentTabObject();
        const taskObject = currentTabObject.getSpecificChecklistTask(taskIndex);
        taskObject.removeTask(checklistTaskIndex);
    };
    return {
        removeTabFromTodoArray,
        removeTaskFromTabArray,
        removeChecklistTaskFromTaskArray
    };
})();

export { objectControllerRemoveObject };