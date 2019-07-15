
const defaultState = {
    isShow: false,
    modalType: 'addUser',
    title: '新增用户'
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'MODAL_CHANGE':
            return Object.assign({}, state, {
                isShow: action.isShow,
                modalType: action.modalType,
                title: action.title
            });
        default:
            return state;
    }
}