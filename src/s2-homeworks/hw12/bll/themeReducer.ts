const initState: StateType = {
    themeId: 1,
}

type StateType = {
    themeId: number
}

type setThemeActionType = {
    type: "SET_THEME_ID",
    id: number
}

export const themeReducer = (state: StateType = initState, action: setThemeActionType): StateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID": {

            // const stateCopy = {...state}
            //  stateCopy.themeId = action.id
            // return stateCopy

            return  {...state, themeId: action.id}

        }

        default:
            return state
    }
}

export const changeThemeId = (id: number): setThemeActionType => ({ type: 'SET_THEME_ID', id }) // fix any


