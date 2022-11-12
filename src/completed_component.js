// original where all properties and methods get returned, so no private fields (completed should be private)
// keeping for posterity, probably will deleted at the end
// const canComplete = (object) => ({
//     completed: false,
//     toggle: () => {
//         if (object.completed) {
//             object.completed = false;
//         } else {
//             object.completed = true;
//         };
//     },
//     getCompletedState: () => {
//         return object.completed
//     }
// });

const completedBehaviorComponent = (object) => {
    let completed = false;
    return Object.assign(object, {
        toggleCompletedState() {
            if (completed) {
                completed = false;
            } else {
                completed = true;
            };
        },
        getCompletedState() {
            return completed;
        }
    });
};

export { completedBehaviorComponent };