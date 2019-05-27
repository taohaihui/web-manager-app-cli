/**
 * Created by thh on 2018/6/21.
 */
import React, { PureComponent } from 'react';
import { createBrowserHistory } from 'history';

import { Button } from 'antd';
// import { login } from '../../service/login';

const browHistory = createBrowserHistory();

export default class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="login-page">
        <h1>login page</h1>
        <Button onClick={this.handleClick}>button</Button>
      </div>
    );
  }

  componentDidMount() {
    // console.log(this.props);

    // login({
    //   username: 'thh',
    //   pwd: 123
    // }).then(res => {
    //   // console.log(res);
    // });
  }

  handleClick() {
    browHistory.push({
      pathname: '/index'
    });
  }
}