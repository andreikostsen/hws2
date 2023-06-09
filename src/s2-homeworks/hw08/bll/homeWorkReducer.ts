import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            if (action.payload === 'up') {
                return  [...state].sort((a,b) => a.name < b.name? -1 : 1)
            } else if (action.payload === 'down') {
                return  [...state].sort((a,b) => a.name < b.name? 1 : -1)
            } else {
                return state
            }

        }
        case 'check': {
            return  [...state].filter(f=>f.age >= action.payload).sort((a,b) => a.age < b.age ? -1: 1)
        }
        default:
            return state
    }
}
