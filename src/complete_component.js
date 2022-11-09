const canComplete = (state) => {
    const toggle = () => {
        // if (state.completed) {
        //     state.completed = false;
        // } else {
        //     state.completed = true;
        // };
        console.log("it works");
    };
    if (state.completed) {
        state.completed = false;
    } else {
        state.completed = true;
    };
    return { toggle };
};

export { canComplete };