import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewsList from './NewsList';
import NewsReader from './NewsReader';
import NewsForm from './NewsForm';

const News = () => {
    return (
        <Switch>
            <Route exact path="/news" component={() => (
                <div>
                    <h1>Here are the new messages:</h1>
                    <NewsForm />
                    <NewsList />
                </div>
            )} />
            <Route path="/news/newsReader/:id" component={NewsReader} />
        </Switch>
    )
};

export default News;