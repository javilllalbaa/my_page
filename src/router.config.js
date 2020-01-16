import {pushStateLocationPlugin} from '@uirouter/react'
import {visualizer} from 'ui-router-visualizer'
import { connect } from 'react-redux'
import Layout from './views/layout'
import Datos from './views/datos/Datos'

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
      name : 'layout.datos',
      url  : '/datos',
      component : Datos
    }
]

export const config = (router) => {
  visualizer(router);
}
