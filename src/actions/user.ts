import { Dispatch } from 'redux';
import { UserState } from '../reducers/user';

export interface SetUserPayload {
    user: UserState
};

export interface SetUser {
    type: string,
    payload: SetUserPayload
};

const setUser = (user: SetUser) => ({
    type: 'SET_USER',
    payload: {user},
});

export const fetchUser = () => async(dispatch: Dispatch) => {
    const response = await fetch('http://httpbin.org/get');
    const user = await response.json();
    dispatch(setUser(user));
};