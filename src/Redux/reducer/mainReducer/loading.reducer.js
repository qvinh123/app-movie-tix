const initialState = {
    isLoading:false
}

export const loadingReudcer =  (state = initialState, { type, payload }) => {
    switch (type) {
    case "SHOW_LOADING":
        return { ...state, isLoading:true }
    case "HIDE_LOADING":
        return {...state,isLoading:false}
    default:
        return state
    }
}
