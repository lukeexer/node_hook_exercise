import React, {useState} from 'react';
import {connect} from 'react-redux';
import { Dispatch } from 'redux';
import { addNews } from '../../actions/news';
import { News } from '../../reducers/news';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addNews: (news: News) => {
        dispatch(addNews(news));
    },
});

const NewsForm = (props: any) => {
    const [name, setName] = useState('');
    const [describe, setDescribe] = useState('');

    return (
        <div>
            Name: <input placeholder="Please input name" value={name} onChange={(e) => {setName(e.target.value);}} />
            Desc: <input placeholder="Please input desc" value={describe} onChange={(e) => {setDescribe(e.target.value);}} />
            <button onClick={() => {
                    props.addNews({id: Math.random(), name, describe})
                }}
            >Add a News</button>
        </div>
    )
};

export default connect(null, mapDispatchToProps)(NewsForm);