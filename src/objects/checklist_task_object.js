import { descriptionBehaviorComponent } from "../components/description_component";
import { completedBehaviorComponent } from "../components/completed_component";

// original where object would need to have Object.assign() for every instance
// keeping for posterity, probably will deleted at the end
// const checklistTaskObject = (description) => {
    // const getTaskDescription = () => {
    //     return description;
    // };
    // const setTaskDescription = (newDescription) => {
    //     description = newDescription;
    // };
//     return { getTaskDescription, setTaskDescription };
// };

const checklistTaskObject = (description) => {
    let object = {};
    Object.assign(object,
        descriptionBehaviorComponent(object, description),
        completedBehaviorComponent(object)
    );
    return object;
}

export { checklistTaskObject };