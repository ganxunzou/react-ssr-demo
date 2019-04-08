import React, { Component } from 'react';

import { Link } from 'react-router-dom';
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Welcome to React SSR!',
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <div>
          <Link to="/header">header</Link>&nbsp;
          <Link to="/footer">footer</Link>
        </div>
      </div>
    );
  }
}
