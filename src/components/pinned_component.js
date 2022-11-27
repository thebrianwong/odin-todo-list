const pinnedBehaviorComponent = (object, initialPinnedState) => {
    let pinned = initialPinnedState;
    return Object.assign(object, {
        togglePinnedState() {
            if (pinned) {
                pinned = false;
            } else {
                pinned = true;
            };
        },
        getPinnedState() {
            return pinned;
        }
    });
};

export { pinnedBehaviorComponent };