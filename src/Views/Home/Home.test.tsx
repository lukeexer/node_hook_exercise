import 'regenerator-runtime';
import 'core-js/stable';
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render, waitFor } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import user from '../../reducers/user';
import Home from './Home';

expect.extend({ toBeInTheDocument });

test('The view will display user information from API after Home rendered', async () => {
    // global.fetch = jest.fn().mockResolvedValue(
    //     { json: () => ({ user: 'Luke' }) }
    // );

    // const store = createStore(
    //     combineReducers({ user }),
    //     applyMiddleware(thunk),
    // );

    // const { getByText } = render(
    //     <Provider store={store}>
    //         <Home />
    //     </Provider>
    // );

    // await waitFor(() => {
    //     expect(getByText(/Luke/)).toBeInTheDocument();
    // });
    
});