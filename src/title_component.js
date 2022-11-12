const titleBehaviorComponent = (object, initialTitle) => {
    let title = initialTitle;
    return Object.assign(object, {
        getTaskTitle() {
            return title;
        },
        setTaskTitle(newTitle) {
            title = newTitle;
        }
    });
};

export { titleBehaviorComponent }