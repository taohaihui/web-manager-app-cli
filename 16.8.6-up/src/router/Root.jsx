import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import routerArr from './createRouter.js';
import Frame from '../layout/frame/Frame';

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Frame>
          <Route path="/login" component={require('../view/login/Login').default} />
          <Route path="/index" component={require('../view/index/Index').default} />
        </Frame>
      </BrowserRouter>
    );
  }
}
