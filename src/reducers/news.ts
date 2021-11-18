import { NewsActionTypes, AddNews, DeleteNews } from '../actions/news';

export interface News {
    id: number,
    name: string,
    describe: string
};

export interface NewsState {
    news: News[]
}

const initialState: NewsState = {
    news: [
        {id: 1, name: 'The First Message', describe: 'This is the first desc.'},
        {id: 2, name: 'The Second Message', describe: 'This is the second desc.'},
        {id: 3, name: 'The Third Message', describe: 'This is the third desc.'},
    ],
};

const news = (state=initialState, action: NewsActionTypes): NewsState => {
    switch (action.type) {
        case 'ADD_NEWS':
            return {
                ...state,
                news: [
                    ...state.news,
                    (<AddNews>action).payload.news,
                ]
            };
        case 'DELETE_NEWS':
            return {
                ...state,
                news: state.news.filter((theNews: News) => {
                    return theNews.id !== (<DeleteNews>action).payload.id
                }),
            };
        default:
            return state;
    }
};

export default news;