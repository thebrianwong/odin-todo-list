const checklistBehaviorComponent = (object) => {
    let checklistObject = undefined;
    return Object.assign(object, {
        addChecklist(checklist) {
            checklistObject = checklist;
        },
        removeChecklist() {
            checklistObject = undefined;
        },
        getChecklist() {
            return checklistObject;
        }
    });
};

export { checklistBehaviorComponent };