import {LOGIN_USER, REGISTER_USER} from '../_actions/types'

export default function(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loginInfo: action.payload}
            break;

        case REGISTER_USER:
            return {...state, registerInfo: action.payload}
            break;

        default:
            return state;
    }
}