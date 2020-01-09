import React, { Component } from 'react';
import { UIRouter,UIView } from '@uirouter/react';
import {plugins, states, config } from './router.config';

class App extends Component {

  render() {
    return (
      <UIRouter plugins={plugins} states={states}>
        <UIView />
      </UIRouter>
    );
  }
}

export default App;