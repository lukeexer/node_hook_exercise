import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { toBeInTheDocument, toHaveTextContent } from '@testing-library/jest-dom/matchers';
import news from '../../reducers/news';
import News from './News';

expect.extend({ toBeInTheDocument, toHaveTextContent });

test('The page will change to news information when I clicked the news item.', () => {
    const store = createStore(combineReducers({ news }));
    const { getByText } = render(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/news']}>
                <News />
            </MemoryRouter>
        </Provider>
    );

    fireEvent.click(getByText('The First Message'))

    expect(getByText('You are reading The First Message')).toBeInTheDocument();
    expect(getByText('This is the first desc.')).toBeInTheDocument();
});

test('The News list will add a new news if I use NewsForm create.', () => {
    const store = createStore(combineReducers({ news }));
    const { getByText, getByPlaceholderText, getAllByRole } = render(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/news']}>
                <News />
            </MemoryRouter>
        </Provider>
    );

    fireEvent.change(
        getByPlaceholderText('Please input name'), { target: { value: 'name for test' } }
    );

    fireEvent.change(
        getByPlaceholderText('Please input desc'), { target: { value: 'desc for test' } }
    );

    fireEvent.click(getByText('Add a News'));

    const newsList = getAllByRole('link');
    expect(newsList.length).toBe(4);
    expect(newsList[3]).toHaveTextContent('name for test');
});