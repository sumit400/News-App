import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryNewsStart } from "../redux/actions/news.action";
import NewsItem from "../components/NewsItem";

export default function Category() {
  let { slug } = useParams();
  console.log(slug)
  const dispatch = useDispatch();
  const categoryNews = useSelector(state => state.categoryNews);

  useEffect(() => {
    dispatch(getCategoryNewsStart(slug))
  }, [slug])

  return ( 
    <div className="container">
      <div className="row">
        {categoryNews.length > 0 &&
          categoryNews.map((item, index) => (
            <NewsItem item={item} key={index} />
          ))}
      </div>
    </div>
  );
}
