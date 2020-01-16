import backendClass from './intercepto'
import { getMenu } from './../actions'

export const backendClassInstance = new backendClass()
export const backend = backendClassInstance.backend

export const getAxios = (subreddit, parameters, token_required = false) => {
    var url = `${subreddit}` 
    //+ serializeQs(parameters)
    return backend.get(url)
        .then(response => response.data)
}

export const getAxionsDispatch = (subreddit, actionPost, parameters, token_required = false) => dispatch => {
    var url = `${subreddit}` 
    //+ serializeQs(parameters)
    return backend.get(url)
    .then(response => {
        switch (actionPost) {
            case "get_menu":
                return dispatch(getMenu(response.data))
            default:
                return false
        }
    })
}