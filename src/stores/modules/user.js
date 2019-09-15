const defaultState = {
    user: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'USER_ADD':
            return Object.assign({}, state, {
                user: [...state.user, ...action.user]
            })
        case 'GET_USR':
            return Object.assign({}, state, {
                user: action.user
            })
        case 'DEL_USER':
            return Object.assign({}, state, {
                user: [...state.user].filter(item => item.id !== action.id)
            })
        case 'CHANGE_USER': 
            console.log(action, 'action')
            return Object.assign({}, state, {
                user: [...state.user].map(item => {
                    console.log(item, 'redux')
                    if(item.id === action.user[0].id){
                        item.username = action.user[0].username
                        item.password = action.user[0].password
                        item.auth = action.user[0].auth
                        item.email = action.user[0].email
                        return item
                    }

                    return item
                })
            })
        default:
            return state;
    }
}