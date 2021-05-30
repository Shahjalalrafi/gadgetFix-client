import { ActionType } from '../Type/Type'

export const SetService = (service) => {
    return {
        type: ActionType.SET_SERVICE,
        payload: service
    }
}

export const selectedService = (service) => {
    return {
        type: ActionType.SELECTED_SERVICE,
        payload: service
    }
}