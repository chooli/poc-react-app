const initialState = {
    content: {
        id: null,
        title: null,
        description: null,
        content: null
    }
}

export const contentReducer = ((state = initialState, action) => {
    
    switch (action.type) {

        case 'ADD_CONTENT': return {
            content: action.content
        }

        default: return state
    }

})