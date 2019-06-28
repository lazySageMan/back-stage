
export default (state, action) => {
    switch (action.type) {
        case "ADD_ORDER":
            return Object.assign({}, state, {
                products: action.data
            });
        default:
            return state;
    }
}