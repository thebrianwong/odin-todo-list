const dueDateBehaviorComponent = (object, initialDueDate) => {
    let dueDate = initialDueDate;
    return Object.assign(object, {
        getTaskDueDate() {
            return dueDate;
        },
        setTaskDueDate(newDueDate) {
            dueDate = newDueDate;
        }
    });
};

export { dueDateBehaviorComponent }