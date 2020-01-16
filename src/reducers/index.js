import { MENU } from './../constants'
import { combineReducers } from 'redux'

const initialState = {
    "menu": {}
}

const getsBySubreddit = (state = initialState, action) => {

    switch (action.type) {
        case MENU:
            return {
                ...state,
                agent: Object.assign(state.menu, action.menu),
            }

        default:
            return state
    }
}

const rootReducer = combineReducers({
    getsBySubreddit
})

export default rootReducer