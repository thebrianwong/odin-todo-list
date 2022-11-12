import { completedBehaviorComponent } from "./complete_component";

// original where object would need to have Object.assign() for every instance
// keeping for posterity, probably will deleted at the end
// const checklistTaskObject = (description) => {
//     const getTaskDescription = () => {
//         return description;
//     };
//     const setTaskDescription = (newDescription) => {
//         description = newDescription;
//     };
//     return { getTaskDescription, setTaskDescription };
// };

const checklistTaskObject = () => {
    let object = {};
    Object.assign(object, completedBehaviorComponent(object));
    return object;
}

export { checklistTaskObject };