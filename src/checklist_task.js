import { canComplete } from "./complete_component";

const checklistTaskObject = (description) => {
    // let state = {
    //     completed: false
    // }
    // let completed = false;
    const getTaskDescription = () => {
        return description;
    };
    const setTaskDescription = (newDescription) => {
        description = newDescription;
    };
    
    // const toggleCompleted = () => {
    //     if (completed) {
    //         completed = false;
    //     } else {
    //         completed = true;
    //     };
    // };
    // const getCompleted = () => {
    //     return completed;
    // };

    // console.log(self)
    // const {canComplete} = canComplete(state);
    // Object.assign(state, canComplete(state))
    // Object.assign(completed, canComplete(completed))
    // return { getTaskDescription, setTaskDescription, toggleCompleted, getCompleted };
    return { getTaskDescription, setTaskDescription };
    // return Object.assign({ getTaskDescription, setTaskDescription, toggleCompleted, getCompleted, canComplete }, canComplete)
};

// Object.assign(checklistTaskObject.prototype, canComplete);

export { checklistTaskObject };