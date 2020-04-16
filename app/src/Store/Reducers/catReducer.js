const initialState = {
    file: "",
    isFetching: false,
    error: ""
}

export const catReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CAT_START':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCH_CAT_SUCCESS':
            return {
                ...state,
                isFetching: false,
                file: action.cat,
                error: ''
            };
        case 'FETCH_CAT_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.cat
            };
        default: return state;
    }

}