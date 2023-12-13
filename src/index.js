import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import './firebase';
import '@csstools/normalize.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/react-examles">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
