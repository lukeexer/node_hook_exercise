import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import  { Middleware } from 'redux';
import news from '../reducers/news';
import user from '../reducers/user';

const logger: Middleware = store => next => (action) => {
    console.log('This will executes: ', action);
    console.log('Before execution, the state is: ', store.getState());

    next(action);

    console.log('After the execution, the state is: ', store.getState());

    return 'I\'m logger 1\'s return value';
};

// const logger2 = store => next => (action) => {
//     const result = next(action);
//     console.log(result);
// };

const rootReducer = combineReducers({news, user});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger),
);

export default store;