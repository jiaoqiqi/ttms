import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import React from 'react';
import reducer from './reducers/index';

import middleHello from './middlewares/hello';

import Hello from './containers/hello';
import Login from './containers/login'

const createMiddlewareStore = applyMiddleware(middleHello)(createStore);

const store = createMiddlewareStore(reducer);

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Login}/>
        <Route path="/" component={Hello}/>
        <Route path="/login" component={Login}/>
    </Router>
</Provider>, document.getElementById("content"));
