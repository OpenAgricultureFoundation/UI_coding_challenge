import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import registerServiceWorker from './js/registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { CookiesProvider } from 'react-cookie'
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(<CookiesProvider>

    <App />
  </CookiesProvider>, document.getElementById('root'));
registerServiceWorker();
