const pinnedBehaviorComponent = (object, initialPinnedState) => {
    let pinned = initialPinnedState;
    return Object.assign(object, {
        togglePinnedState() {
            pinned ? pinned = false : pinned = true;
        },
        getPinnedState() {
            return pinned;
        }
    });
};

export { pinnedBehaviorComponent };