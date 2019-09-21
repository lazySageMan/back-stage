const defaultState = {
    blog: [],
    totalPage: 0
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_BLOG':
            return Object.assign({}, state, {
                blog: action.blogList,
                totalPage: action.totalPage
            })
        default:
            return state;
    }
}