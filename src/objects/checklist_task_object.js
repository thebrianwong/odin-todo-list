import { descriptionBehaviorComponent } from "../components/description_component";
import { completedBehaviorComponent } from "../components/completed_component";

const checklistTaskObject = (description, completed) => {
    let object = {};
    Object.assign(object,
        descriptionBehaviorComponent(object, description),
        completedBehaviorComponent(object, completed)
    );
    return object;
}

export { checklistTaskObject };