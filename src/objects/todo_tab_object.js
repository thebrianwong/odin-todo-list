import { titleBehaviorComponent } from "../components/title_component";
import { containsChecklistBehaviorComponent } from "../components/contains_checklist_component";

const toDoTab = (title) => {
    let object = {};
    Object.assign(object,
        titleBehaviorComponent(object, title),
        containsChecklistBehaviorComponent(object)
    );
    return object;
};

export { toDoTab };