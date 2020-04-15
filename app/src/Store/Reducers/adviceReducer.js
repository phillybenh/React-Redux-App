const initialState = {
    slip: {
        advice: "",
        slip_id: ""
    },
    isFetching: false,
    error: ""
}

export const adviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ADVICE_START':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCH_ADVICE_SUCCESS':
            return {
                ...state,
                isFetching: false,
                slip: {
                    
                    advice: action.payload
                },
                error: ''
            };
        case 'FETCH_ADVICE_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default: return state;
    }

}