import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ShopContextProvider } from './Context/ShopContext';
import { Provider } from 'react-redux';
import { store } from './ReduxComponents/Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </Provider>
    
  </React.StrictMode>
);

reportWebVitals();
