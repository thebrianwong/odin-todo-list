// import { containsChecklistBehaviorComponent } from "../components/contains_checklist_component";
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";

const toDoList = (() => {
    let currentTab = 0;
    const getCurrentTabIndex = () => {
        return currentTab;
    };
    const setCurrentTabIndex = (newCurrentTab) => {
        currentTab = newCurrentTab;
    };
    let object = {
        getCurrentTabIndex,
        setCurrentTabIndex
    };
    Object.assign(object,
        containsChecklistTaskBehaviorComponent(object),
    );
    return object;
})();

export { toDoList };