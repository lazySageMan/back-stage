

const defaultState = {
    header: [
        {
            type: '/blog/add',
            title: '新建博客',
            bgColor: 'primary'
        }
    ],
    title: '博客管理'
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_HEADER':
            return Object.assign({}, state, {
                header: action.header,
                title: action.title
            });
        default:
            return state;
    }
}