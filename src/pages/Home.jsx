import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsStart } from '../redux/actions/news.action';
import NewsItem from '../components/NewsItem';

export default function Home() {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news);
    
    useEffect(() => {
        dispatch(getNewsStart());
        // eslint-disable-next-line
    }, [news.length])
    return (
        <div className='container mb-4'>
            <div className="row">
                {
                    news.length > 0 && news.map((item, index) => (
                        <NewsItem item={item} key={index}/>
                        ))
                    }    
            </div>
        </div>
    )
}