import { containsChecklistBehaviorComponent } from "../components/contains_checklist_component";

const toDoList = (() => {
    let object = {};
    Object.assign(object,
        containsChecklistBehaviorComponent(object)
    );
    return object;
})();

export { toDoList };