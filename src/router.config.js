import {pushStateLocationPlugin} from '@uirouter/react'
import {visualizer} from 'ui-router-visualizer'
import { connect } from 'react-redux'
import Layout from './views/layout'
import Triqui from './views/triqui/Triqui'
import Login from './views/login/Login'


export const plugins = [
  pushStateLocationPlugin
]

export const states = [
    {
      name : 'layout',
      url: '/index',
      component : connect()(Layout)
    },
    {
      name : 'layout.login',
      url  : '/login',
      component : Login
    },
    {
      name : 'layout.triqui',
      url  : '/triqui',
      component : Triqui
    }
]

export const config = (router) => {
  visualizer(router);
}
