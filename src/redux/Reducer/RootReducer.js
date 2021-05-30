import { combineReducers } from "redux";
import { ServiceReducer } from "./Reducer";


export const rootReducer = combineReducers({
    allService: ServiceReducer
})