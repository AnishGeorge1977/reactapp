import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';


//import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';

import Blog from './components/Blog/Blog';
import FullPost from './components/Blog/FullPost/FullPost';
import Profile from './components/Profile/Profile';
import Contact from './components/Contact/Contact';

import './styles/styles.scss';

import axios from 'axios';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/contact" component={Contact}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
