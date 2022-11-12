const descriptionBehaviorComponent = (object, descriptionParameter) => {
    let description = descriptionParameter;
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