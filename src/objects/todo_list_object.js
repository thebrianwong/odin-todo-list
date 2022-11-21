// import { containsChecklistBehaviorComponent } from "../components/contains_checklist_component";
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";

const toDoList = (() => {
    let currentTab = 0;
    const getCurrentTab = () => {
        return currentTab;
    };
    const setCurrentTab = (newCurrentTab) => {
        currentTab = newCurrentTab;
    };
    let object = {
        getCurrentTab,
        setCurrentTab
    };
    Object.assign(object,
        containsChecklistTaskBehaviorComponent(object),
    );
    return object;
})();

export { toDoList };