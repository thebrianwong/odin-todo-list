const checklistTaskObject = (description) => {
    let completed = false;
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
    return { getTaskDescription, setTaskDescription, toggleCompleted };
};

export { checklistTaskObject };