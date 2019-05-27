/**
 * Created by thh on 2018/6/21.
 */
import './frame.scss';
import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default class Frame extends Component {
  render() {
    return (
      <div className="layout-frame" id="layout-frame">
        <h1>frame</h1>
        <Link to="/login"><Button onClick={this.go1.bind(this, '/login')}>login</Button></Link>
        <Link to="/index"><Button onClick={this.go1.bind(this, '/index')}>index</Button></Link>

        {this.props.children}
      </div>
    );
  }

  go1(path1) {
    console.log(path1);
  }
}