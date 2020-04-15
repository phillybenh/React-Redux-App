const initialState = {
    slip: {
        advice: "A common regret in life is wishing one hadn't worked so hard.",
        slip_id: "117"
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
        case 'FETCH_ADVICE_START':
            return {
                ...state,
                isFetching: false,
                quote: action.payload,
                error: ''
            };
        case 'FETCH_ADVICE_START':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default: return state;
    }

}