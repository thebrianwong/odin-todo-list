const containsChecklistTaskBehaviorComponent = (object) => {
    let checklist = [];
    const getTaskIndex = () => {
        return checklist.length - 1;
    };
    return Object.assign(object, {
        addTask(task) {
            checklist.push(task);
            return getTaskIndex();
        },
        removeTask(index) {
            checklist[index] = undefined;
        },
        getChecklistTasks() {
            return checklist;
        },
        getSpecificChecklistTask(index) {
            return checklist[index];
        }
    });
};

export { containsChecklistTaskBehaviorComponent };