const checklistObject = () => {
    let checklist = [];
    const addTask = (task) => {
        checklist.push(task);
    };
    // might have to change later so that the logic is not based on description,
    // maybe add some id to each task
    const removeTask = (task) => {
        for (item in checklist) {
            if (checklist[item].getTaskDescription() === task.getTaskDescription()) {
                checklist.splice(item, 1);
                break;
            };
        };
    };
    return { addTask, removeTask };
};

export { checklistObject };