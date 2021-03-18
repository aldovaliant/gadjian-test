const globalState = {
    personnels: [],
    loading: false,
    error: null
};

const rootReducer = (state = globalState, action) => {
    if (action.type === 'FETCH_PERSONNELS_REQUEST') {
        return {
            ...state,
            loading: true,
        }
    }
    if (action.type === 'FETCH_PERSONNELS_SUCCESS') {
        return {
            ...state,
            loading: false,
            personnels: action.payload,
        }
    }
    if (action.type === 'FETCH_PERSONNELS_FAILURE') {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }
    return state;
};

export default rootReducer;