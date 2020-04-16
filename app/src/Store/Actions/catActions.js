import axios from 'axios';

export const fetchCat = () => {

    return dispatch => {
        dispatch({ type: 'FETCH_CAT_START' });
        axios
            .get('https://aws.random.cat/meow')
            .then(response => {
                console.log(" cat response",response)
                dispatch({
                    type: 'FETCH_CAT_SUCCESS',
                    cat: response.data.file
                })
            })
            .catch(error => {
                // console.log("error", error)
                dispatch({
                    type: 'FETCH_CAT_FAILURE',
                    cat: `${error}`
                })
            })
    }
}