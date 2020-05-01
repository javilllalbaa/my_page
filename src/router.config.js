import {pushStateLocationPlugin} from '@uirouter/react'
import {visualizer} from 'ui-router-visualizer'
import { connect } from 'react-redux'
import Layout from './views/layout'
import Triqui from './views/triqui/Triqui'


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
      name : 'layout.triqui',
      url  : '/triqui',
      component : Triqui
    }
]

export const config = (router) => {
  visualizer(router);
}
