// import { containsChecklistBehaviorComponent } from "../components/contains_checklist_component";
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";

const toDoList = (() => {
    let object = {};
    Object.assign(object,
        containsChecklistTaskBehaviorComponent(object)
    );
    return object;
})();

export { toDoList };