
const defaultState = {
    isShow: false,
    modalType: 'addUser',
    title: '新增用户',
    id: null,
    userInfo: {}
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'MODAL_CHANGE':
            return Object.assign({}, state, {
                isShow: action.isShow,
                modalType: action.modalType,
                title: action.title,
                id: action.id ? action.id : null,
                userInfo: action.userInfo ? action.userInfo : {}
            });
        default:
            return state;
    }
}