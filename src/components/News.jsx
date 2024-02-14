// https://newsdata.io/api/1/news?apikey=pub_36951e614f10eaeef6d1b28492267368eb358&q=cricket&language=en&country=in
//https://newsdata.io/api/1/news?apikey=pub_36951e614f10eaeef6d1b28492267368eb358&q=pizza
//https://newsdata.io/api/1/archive?apikey=pub_36951e614f10eaeef6d1b28492267368eb358&q=example&language=en&from_date=2023-01-19&to_date=2023-01-25
//https://newsdata.io/api/1/news?apikey=pub_36951e614f10eaeef6d1b28492267368eb358&q=YOUR-QUERY&page=XXXPPPXXXXXXXXXX
//https://newsdata.io/api/1/news?apikey=pub_36951e614f10eaeef6d1b28492267368eb358&q=YOUR_QUERY

import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import NewsItem2 from "./NewsItem2";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    let url = `https://newsdata.io/api/1/news?apikey=pub_36951e614f10eaeef6d1b28492267368eb358&country=${props.country}&q=${props.category}&language=en`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    setPage(parseData.nextPage);
    console.log(page);
    setLoading(false);
    setArticles(parseData.results);
    setTotalResults(parseData.totalResults);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsdata.io/api/1/news?apikey=pub_36951e614f10eaeef6d1b28492267368eb358&country=${props.country}&q=${props.category}&language=en&page=${page}`;
    setLoading(articles.length !== totalResults);
    let data = await fetch(url);
    let parseData = await data.json();
    setPage(parseData.nextPage);
    // console.log(parseData);
    setLoading(false);
    setArticles(articles.concat(parseData.results));
    setTotalResults(parseData.totalResults);
  };

  return (
    <>
      <div className="overflow-hidden">
        <h2 className="text-center my-3 text-3xl font-semibold">
          Trending headlines on {capitalizeFirstLetter(props.category)}
        </h2>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading && <Spinner />}
        >
          <div className="flex flex-wrap justify-center">
            {articles.map((element) => {
              return (
                <>
                  <NewsItem2
                    key={element.article_id}
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.image_url}
                    date={element.pubDate}
                    newsUrl={element.source_url}
                    author={element.creator}
                  />
                </>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  // pageSize: 8,
  category: "sports",
};
News.propTypes = {
  country: PropTypes.string,
  // pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
