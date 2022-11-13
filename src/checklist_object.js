// const checklistObject = () => {
//     let checklist = [];
//     const addTask = (task) => {
//         checklist.push(task);
//     };
//     // might have to change later so that the logic is not based on description,
//     // maybe add some id to each task
//     const removeTask = (task) => {
//         for (item in checklist) {
//             if (checklist[item].getTaskDescription() === task.getTaskDescription()) {
//                 checklist.splice(item, 1);
//                 break;
//             };
//         };
//     };
//     const getChecklistTasks = () => {
//         return checklist
//     }
//     const getSpecificChecklistTask = (index) => {
//         return checklist[index];
//     }
//     return { addTask, removeTask, getChecklistTasks, getSpecificChecklistTask };
// };

import { containsChecklistTaskBehaviorComponent } from "./contains_checklist_task_component";

const checklistObject = () => {
    let object = {};
    Object.assign(object,
        containsChecklistTaskBehaviorComponent(object)
    );
    return object;
};

export { checklistObject };