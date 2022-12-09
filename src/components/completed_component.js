const completedBehaviorComponent = (object, initialCompletedState) => {
    let completed = initialCompletedState;
    return Object.assign(object, {
        toggleCompletedState() {
            completed ? completed = false : completed = true;
        },
        getCompletedState() {
            return completed;
        }
    });
};

export { completedBehaviorComponent };