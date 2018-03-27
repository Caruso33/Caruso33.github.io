import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import Kontakt from './views/Kontakt';
import Themen from './views/Themen';
import Impressum from './views/Impressum';
import FotoList from './views/reisefotos/FotoList';
import Ueber from './views/Ueber';
import Blog from './views/blog/Blog';
import './App.css';

class App extends Component {
  render() {
    // {this.props.children}
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/kontakt" component={Kontakt} />
        <Route path="/über" component={Ueber} />
        <Route path="/blog" component={Blog} />
        <Route path="/bilder" component={FotoList} />
        <Route path="/inspi" component={Themen} />
        <Route path="/impressum" component={Impressum} />
      </Switch>
    );
  }
}

export default App;
