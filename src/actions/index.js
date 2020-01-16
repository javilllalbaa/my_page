import { MENU } from './../constants'
import { getAxionsDispatch } from './../services'

export const getMenu = (data) => ({
    type: MENU,
    menu: data
})

export const get_Menu = () => (dispatch, getState) => {
    dispatch(getAxionsDispatch('menu', 'get_menu', {}, true))
}