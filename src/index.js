import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store/store';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { REPO_NAME } from './constans/repo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={`/${REPO_NAME}/`}>
    <Provider store={store}>
    <App />
    </Provider>
      
    </BrowserRouter>
  
);

