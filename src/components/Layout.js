import React from 'react';
import Header from '../views/Header';
import Footer from '../views/Footer';
import { Link, Switch, Route } from 'react-router-dom';

class Layout extends React.Component {
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
        <Switch>
          <Route path="/header" component={Header} />
          <Route path="/footer" component={Footer} />
        </Switch>
      </div>
    );
  }
}

export default Layout;
