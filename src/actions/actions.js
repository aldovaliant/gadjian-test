import axios from 'axios'

export const fetchPersonnels = () => async (dispatch, getState) => {

    dispatch({ type: "FETCH_PERSONNELS_REQUEST" })
    
    try {
        const response = await axios.get('https://randomuser.me/api/?results=28');
        dispatch({ type: "FETCH_PERSONNELS_SUCCESS", payload: response.data.results })
    } catch (error) {
        dispatch({ type: "FETCH_PERSONNELS_FAILURE", error: error })
    }
}