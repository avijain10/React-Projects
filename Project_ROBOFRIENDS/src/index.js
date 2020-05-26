//React is the View Library
import React from 'react';
//It's is used For Websites
import ReactDOM from 'react-dom';
import './index.css';
import App from'./App.js';
//Service Worker makes our app fast and work offline
import * as serviceWorker from './serviceWorker';
import 'tachyons';
//Destructure {robots} if not default , Used to grab multiple values
// import { robots } from './robots';


ReactDOM.render(
  <App />,
  document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();