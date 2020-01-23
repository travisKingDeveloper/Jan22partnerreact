import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import ColorPicker from './components/ColorWorkshop'
import ThisWeek from './components/ThisWeek'
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/color-picker">
            Color Picker :)
          </Link>
        </li>
        <li>
          <Link to="/this-week">
            This Week
          </Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/color-picker" component={ColorPicker} />
      <Route path="/this-week" component={ThisWeek} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
