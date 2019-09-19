
const defaultState = {
    value: '',
    title: '',
    img: '',
    tag: '',
    category: '',
    id: ''
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'BLOG_CHANGE':
            return Object.assign({}, state, {
                value: action.value,
                title: (action.blodTitle || action.blodTitle === '') ? action.blodTitle : state.title,
                img: (action.blogImg || action.blogImg === '') ? action.blogImg : state.img,
                tag: (action.blogTag || action.blogTag === '') ? action.blogTag : state.tag,
                category: (action.blogCategory || action.blogCategory === '') ? action.blogCategory : state.category,
                id: (action.blogId || action.blogId === '') ? action.blogId : state.id
            });
        default:
            return state;
    }
}