const initialState = [];

const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        // case 'ADD_OBJ':
        //     console.log('ADD_OBJ::: ');
        //     return state
        //     break;

        case 'GET_ALL_API_DATA':
            console.log('GET_ALL_API_DATA::: ');
            console.log('action.apiData::: ', action.apiData);
            return state
            break;

        default:
            return state;
            break;
    }
}

export default toDoReducer