import {pushStateLocationPlugin} from '@uirouter/react'
import {visualizer} from 'ui-router-visualizer'
import Layout from './views/layout'

export const plugins = [
  pushStateLocationPlugin
]

export const states = [
    {
      name : 'layout',
      url: '/text',
      component : Layout
    }
]

export const config = (router) => {
  visualizer(router);
}
