import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './css/App.css';

import Login from './components/login';
import Games from './components/games';
import Game from './components/game';
import Menu from './components/menu';

class App extends Component {
  render() {
    return (
      <Router>
      	<div>
	      	<Route component={Menu} />
	      	<div className="container">
		        <Switch>
	        		<Route exact path="/" component={Login} />
		          <Route path="/games" component={Games} />
              <Route path="/game/:gameId" component={Game} />
		          <Route render = {() => <p>Błąd 404</p>} />
		        </Switch>
	        </div>
        </div>
	    </Router>
    );
  }
}

export default App;
