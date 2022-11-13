const notesBehaviorComponent = (object, initialNotes) => {
    let notes = initialNotes;
    return Object.assign(object, {
        getTaskNotes() {
            return notes;
        },
        setTaskNotes(newNotes) {
            notes = newNotes;
        }
    });
};

export { notesBehaviorComponent }