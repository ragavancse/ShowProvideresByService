import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function ajaxStatusReducer(state = initialState, action) {
    switch(action.type) {
        case types.SERVICE_SUCCESS: 
        return {
                ...state,
                services: action.payload
            }
        case types.PROVIDER_SUCCESS:
                    console.log("action",action)

            return {
                ...state,
                provider: action.payload
            }
        default: 
            return state;
    }
}