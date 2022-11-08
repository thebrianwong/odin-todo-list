const checklistObject = () => {
    let checklist = [];
    const addTask = (task) => {
        checklist.push(task);
    };
    const removeTask = (task) => {
        for (item in checklist) {
            if (checklist[item] === task.getTaskDescription()) {
                checklist.splice(item, 1);
                break;
            };
        };
    };
    return { addTask, removeTask };
};