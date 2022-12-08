// import { containsChecklistBehaviorComponent } from "../components/contains_checklist_component";
import { containsChecklistTaskBehaviorComponent } from "../components/contains_checklist_task_component";

const toDoList = (() => {
    let currentTab = 0;
    const getCurrentTabIndex = () => {
        return currentTab;
    };
    const setCurrentTabIndex = (newCurrentTab) => {
        if (newCurrentTab === null) {
            currentTab = null;
        } else {
            currentTab = Number(newCurrentTab);
        };
    };
    const getCurrentTabObject = () => {
        const currentTabIndex = getCurrentTabIndex();
        const currentTabObject = toDoList.getSpecificChecklistTask(currentTabIndex);
        return currentTabObject;
    }
    let object = {
        getCurrentTabIndex,
        setCurrentTabIndex,
        getCurrentTabObject
    };
    Object.assign(object,
        containsChecklistTaskBehaviorComponent(object),
    );
    return object;
})();

export { toDoList };