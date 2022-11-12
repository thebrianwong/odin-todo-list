import { titleBehaviorComponent } from "./title_component";
import { descriptionBehaviorComponent } from "./description_component";
import { dueDateBehaviorComponent } from "./due_date_component";
import { notesBehaviorComponent } from "./notes_component";
import { checklistBehaviorComponent } from "./checklist_component";
import { pinnedBehaviorComponent } from "./pinned_component";
import { completedBehaviorComponent } from "./completed_component";

const toDoTask = (title, description, dueDate, notes) => {
    let object = {};
    Object.assign(object, titleBehaviorComponent(object, title));
    Object.assign(object, descriptionBehaviorComponent(object, description));
    Object.assign(object, dueDateBehaviorComponent(object, dueDate));
    Object.assign(object, notesBehaviorComponent(object, notes));
    Object.assign(object, checklistBehaviorComponent(object));
    Object.assign(object, pinnedBehaviorComponent(object));
    Object.assign(object, completedBehaviorComponent(object));
    return object;
};

export { toDoTask };