const defaultState = {
    blog: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_BLOG':
            return Object.assign({}, state, {
                blog: action.blogList
            })
        default:
            return state;
    }
}