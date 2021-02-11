import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Containers/Login/Login';
import Signup from './Containers/Signup/Signup';
import {BrowserRouter , Switch, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import authReducer from './Store/Reducers/AuthReducer';

const reducer = combineReducers(
  {
    authentication: authReducer
  }
);

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(  
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/login' exact component={Login}/>
          <Route path='/signup' exact component={Signup}/>
          <Route path='/' component={App}/>        
        </Switch>
      </BrowserRouter>
    </Provider>        
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
