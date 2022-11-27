import { titleBehaviorComponent } from "../components/title_component";
import { descriptionBehaviorComponent } from "../components/description_component";
import { dueDateBehaviorComponent } from "../components/due_date_component";
import { notesBehaviorComponent } from "../components/notes_component";
// import { containsChecklistBehaviorComponent } from "../components/contains_checklist_component";
import { pinnedBehaviorComponent } from "../components/pinned_component";
import { completedBehaviorComponent } from "../components/completed_component";
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";

const toDoTask = (title, dueDate, description, notes, pinned, completed) => {
    let object = {};
    Object.assign(object,
        titleBehaviorComponent(object, title), 
        descriptionBehaviorComponent(object, description),
        dueDateBehaviorComponent(object, dueDate),
        notesBehaviorComponent(object, notes),
        // containsChecklistBehaviorComponent(object),
        pinnedBehaviorComponent(object, pinned),
        completedBehaviorComponent(object, completed),
        containsChecklistTaskBehaviorComponent(object)
    );
    return object;
};

export { toDoTask };