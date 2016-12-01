import {Route, Router, IndexRoute, hashHistory, browserHistory}from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About';
import Examples from './components/Examples';
import Main from './components/Main';
import Weather from './components/Weather';
require('./styles/style.scss');

ReactDOM.render(
	<Router history={browserHistory}>
      <Route path='/' component={Main}>
      <Route path='/about' component={About} />
      <Route path='/examples' component={Examples}/> 
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
   	document.getElementById('app') 
);

