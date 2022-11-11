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

// const canComplete = (object) => ({
//     toggle: () => {
//         if (object.state.completed) {
//             object.state.completed = false;
//         } else {
//             object.state.completed = true;
//         };
//     },
//     getCompletedState: () => {
//         return object.state.completed
//     }
// });

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

const canComplete = (object) => ({
    completed: false,
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

// const canComplete = (object) => {
//     const obj = {
//         completed: false,
//         toggle: () => {
//             if (object.completed) {
//                 object.completed = false;
//             } else {
//                 object.completed = true;
//             };
//         },
//         getCompletedState: () => {
//             return object.completed
//         }
//     }
//     return obj
// };

export { canComplete };