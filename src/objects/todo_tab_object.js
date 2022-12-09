import { titleBehaviorComponent } from "../components/title_component";
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";

const toDoTab = (title) => {
    let object = {};
    Object.assign(object,
        titleBehaviorComponent(object, title),
        containsChecklistTaskBehaviorComponent(object)
    );
    return object;
};

export { toDoTab };