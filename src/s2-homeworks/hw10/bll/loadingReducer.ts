const initState = {
    isLoading: false,
}

type StateType = {
    isLoading: boolean
}

export const loadingReducer = (state:StateType = initState, action: LoadingActionType): StateType => { // fix any
    switch (action.type) {

        case "CHANGE_LOADING": {
            const stateCopy = {...state}
            stateCopy.isLoading = action.isLoading
            return stateCopy
        }

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
