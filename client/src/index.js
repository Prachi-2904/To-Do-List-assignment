import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { todosreducer } from './redux/reducres/todosreducer'; // Adjust the path to your rootReducer
import App from './App';

// Create the Redux store
const store = createStore(todosreducer);

// Render the application
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
