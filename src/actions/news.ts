import { News } from '../reducers/news';

export interface addNewsPayload {
    news: News
};

export interface AddNews {
    type: string,
    payload: addNewsPayload
};

export interface DeleteNewsPayload {
    id: number
};

export interface DeleteNews {
    type: string,
    payload: DeleteNewsPayload
};

export type NewsActionTypes = AddNews | DeleteNews;

export const addNews = (news: News): AddNews => (
    {type: 'ADD_NEWS', payload: {news}}
);

export const deleteNews = (id: number): DeleteNews => (
    {type: 'DELETE_NEWS', payload: {id}}
);