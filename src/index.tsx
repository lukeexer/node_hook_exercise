import React from 'react';
import ReactDOM from 'react-dom'
import 'regenerator-runtime/runtime';
import 'core-js/stable';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Menu from './components/Menu';
import Home from './Views/Home';
import About from './Views/About';
import NotFound from './Views/Notfound';
import News from './Views/News';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Menu />
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route path="/news" component={News} />
                <Route path="/" component={NotFound} />
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);