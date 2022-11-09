const toDoItem = (title, description, dueDate, notes, checklist) => {
    let pinned = false;
    const getTitle = () => {
        return title;
    };
    const setTitle = (newTitle) => {
        title = newTitle;
    };
    const getDescription = () => {
        return description;
    };
    const setDescription = (newDescription) => {
        description = newDescription;
    };
    const getDueDate = () => {
        return dueDate;
    };
    const setDueDate = (newDueDate) => {
        dueDate = newDueDate;
    };
    const getNotes = () => {
        return notes;
    };
    const setNotes = (newNotes) => {
        notes = newNotes;
    };
    const getChecklist = () => {
        return checklist;
    };
    const setChecklist = (newChecklist) => {
        checklist = newChecklist;
    };
    const getPinned = () => {
        return pinned;
    };
    const togglePinned = () => {
        if (pinned) {
            pinned = false;
        } else {
            pinned = true;
        };
    };
    return { getTitle, setTitle, getDescription, setDescription, getDueDate, setDueDate,
        getNotes, setNotes, getChecklist, setChecklist, getPinned, togglePinned };
};

export { toDoItem };