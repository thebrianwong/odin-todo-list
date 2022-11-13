const descriptionBehaviorComponent = (object, initialDescription) => {
    let description = initialDescription;
    return Object.assign(object, {
        getTaskDescription() {
            return description;
        },
        setTaskDescription(newDescription) {
            description = newDescription;
        }
    });
};

export { descriptionBehaviorComponent }