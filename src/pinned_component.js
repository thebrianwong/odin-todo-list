const pinnedBehaviorComponent = (object) => {
    let pinned = false;
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