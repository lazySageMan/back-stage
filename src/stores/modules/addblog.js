
const defaultState = {
    value: ''
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'BLOG_CHANGE':
            return Object.assign({}, state, {
                value: action.value
            });
        default:
            return state;
    }
}