import React from 'react';
import {useSelector} from 'react-redux';
import { News } from '../../reducers/news';
import { RootState } from '../../store';

const NewsReader = (props: any) => {
    //console.log(props.match);
    const targetNewsId = props.match.params.id;
    const news = useSelector((state: RootState) => state.news.news);
    let targetNews = news.find(theNews => (
        String(theNews.id) === String(targetNewsId)
    ));
    if (targetNews === undefined) {
        targetNews = {id: 0, name: '', describe: ''};
    }

    return (
        <div>
            <h1>You are reading {targetNews.name}</h1>
            <p>{targetNews.describe}</p>
        </div>
    );
};

export default NewsReader;