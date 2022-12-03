import { helperFunctions } from "./helper_functions";
import { toDoList } from "./todo_list_object";
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";

const storage = (() => {
    const setTab = (tabIndex) => {
        const tabObject = toDoList.getSpecificChecklistTask(tabIndex);
        localStorage.setItem(`tab_${tabIndex}`, tabObject.getTaskTitle())
        console.log(localStorage)
        console.log(localStorage.getItem(`tab_${tabIndex}`))
    };
    const setChecklistTask = (tabIndex, taskIndex, checklistTaskIndex) => {
        // const 
    };
    return { setTab, setChecklistTask}
})();

export { storage };