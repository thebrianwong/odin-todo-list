import { titleBehaviorComponent } from "./title_component";
import { descriptionBehaviorComponent } from "./description_component";
import { dueDateBehaviorComponent } from "./due_date_component";
import { notesBehaviorComponent } from "./notes_component";
import { containsChecklistBehaviorComponent } from "./contains_checklist_component";
import { pinnedBehaviorComponent } from "./pinned_component";
import { completedBehaviorComponent } from "./completed_component";

const toDoTask = (title, description, dueDate, notes) => {
    let object = {};
    Object.assign(object,
        titleBehaviorComponent(object, title), 
        descriptionBehaviorComponent(object, description),
        dueDateBehaviorComponent(object, dueDate),
        notesBehaviorComponent(object, notes),
        containsChecklistBehaviorComponent(object),
        pinnedBehaviorComponent(object),
        completedBehaviorComponent(object)
    );
    return object;
};

export { toDoTask };