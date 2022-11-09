import { canComplete } from "./complete_component";

const checklistTaskObject = (description) => {
    let state = {
        completed: false
    }
    // let completed = false;
    const getTaskDescription = () => {
        return description;
    };
    const setTaskDescription = (newDescription) => {
        description = newDescription;
    };
    const toggleCompleted = () => {
        if (completed) {
            completed = false;
        } else {
            completed = true;
        };
    };
    // Object.assign(state, canComplete())
    return { getTaskDescription, setTaskDescription, toggleCompleted, canComplete, state };
};
// Object.assign(checklistTaskObject, canComplete())

export { checklistTaskObject };