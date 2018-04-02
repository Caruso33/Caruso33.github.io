import React, { Component, Fragment } from 'react';

import AppBar from './partials/AppBar';
import Landing from './Landing';

class App extends Component {
  state = {
    open: true
  };

  onDrawerToggle = isOpen =>
    this.setState(
      {
        open: isOpen
      },
      () => {
        console.log('state set');
      }
    );

  render() {
    return (
      <Fragment>
        <AppBar onDrawerToggle={this.onDrawerToggle} />
        <Landing
          drawerOpen={this.state.open}
          onDrawerToggle={this.onDrawerToggle}
        />
      </Fragment>
    );
  }
}

export default App;

// import { Switch, Route } from 'react-router-dom';

// import Home from './home/';
// import Kontakt from './kontakt/Kontakt';
// import Themen from './themen/Themen';
// import Impressum from './impressum/Impressum';
// import FotoList from './reisefotos/FotoList';
// import Ueber from './ueber/Ueber';
// import Blog from './blog/Blog';

// import './App.css';

// <Switch>
//   <Route exact path="/" component={Landing} />
// {/* <Route path="/home" component={Home} />
// <Route path="/kontakt" component={Kontakt} />
// <Route path="/über" component={Ueber} />
// <Route path="/blog" component={Blog} />
// <Route path="/bilder" component={FotoList} />
// <Route path="/inspi" component={Themen} />
// <Route path="/impressum" component={Impressum} /> */}
// </Switch>
