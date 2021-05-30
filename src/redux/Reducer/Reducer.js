import { ActionType } from "../Type/Type";

const initialState = {
    service: []
}


export const ServiceReducer = (state= initialState, {type, payload}) => {
    switch(type) {
        case ActionType.SET_SERVICE : 
        return {
            ...state,
            service: payload
        }

        default: return state
    }
}