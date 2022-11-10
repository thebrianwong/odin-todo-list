/* const canComplete = (state) => ({
    toggle: () => {
        // if (state.completed) {
        //     state.completed = false;
        // } else {
        //     state.completed = true;
        // };
        // console.log("it works");
    // };
    if (state.completed) {
        state.completed = false;
    } else {
        state.completed = true;
    };
    // return { toggle };
    }
}); */

const canComplete = (object) => ({
    toggle: () => {
        if (object.completed) {
            object.completed = false;
        } else {
            object.completed = true;
        };
    },
    getCompletedState: () => {
        return object.completed
    }
});

// const canComplete = (completed) => ({
//     toggle: () => {
//         if (completed) {
//             completed = false;
//         } else {
//             completed = true;
//         };
//     }
// });

export { canComplete };