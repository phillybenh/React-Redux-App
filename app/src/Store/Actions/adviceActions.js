import axios from 'axios';

export const fetchAdvice = () => {

    return dispatch => {
        dispatch({ type: 'FETCH_ADVICE_START' });
        axios
            .get('https://api.adviceslip.com/advice')
            .then(response => {
                // console.log("response",response)
                dispatch({
                    type: 'FETCH_ADVICE_SUCCESS',
                    payload: response.data.slip.advice
                })
            })
            .catch(error => {
                // console.log("error", error)
                dispatch({
                    type: 'FETCH_ADVICE_FAILURE',
                    payload: `${error}`
                })
            })
    }
}