import axios from 'axios';

export const fetchAdvice = () => {

    return dispatch => {
        dispatch({ type: 'FETCH_ADVICE_START' });
        axios
            .get('https://api.adviceslip.com/advice')
            .then(response => {
                dispatch({type: 'FETCH_ADVICE_SUCCESS',
            payload: response.data.advice})
            })
            .catch(error => {
                dispatch({
                    type: 'FETCH_ADVICE_FAILURE',
                    payload: `Error ${error.response.status} : ${error.response.data}`
                })
            })
    }
}