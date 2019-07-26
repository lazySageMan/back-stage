const defaultState = {
    user: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'USER_ADD':
            return Object.assign({}, state, {
                user: action.user
            });
        default:
            return state;
    }
}