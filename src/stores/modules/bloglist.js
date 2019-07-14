const defaultState = {
    blog: [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 5',
        }, 
        {
            title: 'Ant Design Title 6',
        },
        
    ]
};

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}