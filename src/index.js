import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import reducers from './reducers/index';
import App from './components/App';
import Films from './components/films';
import Actors from './components/actors';

const middleware = applyMiddleware(thunk,logger);
const store = createStore(reducers, middleware);

const Routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Films} />
                <Route path="/film_actors" component={Actors} />
            </Route>
        </Router>
    </Provider>
);


ReactDOM.render(
    Routes,
    document.getElementById('root')
);
