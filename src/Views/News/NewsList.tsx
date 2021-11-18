import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {deleteNews} from '../../actions/news';
import { News } from '../../reducers/news';
import { RootState } from '../../store';

const NewsList = (props: any) => {
        const dispatch = useDispatch();
        
        return (
            <ul>
                {
                    useSelector((state: RootState) => state.news.news).map((theNews: News) => (
                        <li key={theNews.id}>
                            <Link to={`/news/newsReader/${theNews.id}`}>
                                {theNews.name}
                            </Link>
                            <button onClick={() => {dispatch(deleteNews(theNews.id));}}>
                                Delete
                            </button>
                        </li>
                        ))
                }
            </ul>
        );
};

export default NewsList;