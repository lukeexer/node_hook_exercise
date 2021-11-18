import { SetUser } from "../actions/user";

export interface UserState {
    name: string,
    user: any
};

const initialState: UserState = {
    name: 'Luke',
    user: {},
};

const user = (state=initialState, action: SetUser): UserState => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload.user,
            };
        default:
            return state;
    }
};

export default user;