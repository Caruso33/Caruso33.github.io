import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import AppBar from './partials/AppBar';
import Drawer from './partials/Drawer';

import Landing from './Landing';
import FotoList from './reisefotos/FotoList';

class App extends Component {
  state = {
    open: false
  };

  onDrawerToggle = isOpen =>
    this.setState({
      open: isOpen
    });

  render() {
    return (
      <Fragment>
        <AppBar onDrawerToggle={this.onDrawerToggle} />
        <Drawer open={this.state.open} onDrawerToggle={this.onDrawerToggle} />
        <Route
          exact
          path="/"
          render={() => (
            <Landing
              drawerOpen={this.state.open}
              onDrawerToggle={this.onDrawerToggle}
            />
          )}
        />
        <Route path="/bilder" component={FotoList} />
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
