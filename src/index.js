import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/FVApp';
import FVApp from './components/FVApp'
import CssBaseline from "@material-ui/core/CssBaseline";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    {/* <App /> */}
    <FVApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
