import React, { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";
import NewsItemSmall from "./NewsItemSmall";

const WorldLatestNews = (props) => {
  const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    let url = `https://newsdata.io/api/1/news?apikey=pub_36951e614f10eaeef6d1b28492267368eb358&q=latest&language=en`;
    // setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    // setPage(parseData.nextPage);
    // console.log(page);
    // setLoading(false);
    setArticles(parseData.results);
    setTotalResults(parseData.totalResults);
  };

  useEffect(() => {
    updateNews();
  }, []);

//   const fetchMoreData = async () => {
//     let url = `https://newsdata.io/api/1/news?apikey=pub_36951e614f10eaeef6d1b28492267368eb358&country=${props.country}&q=${props.category}&language=en&page=${page}`;
//     setLoading(articles.length !== totalResults);
//     let data = await fetch(url);
//     let parseData = await data.json();
//     setPage(parseData.nextPage);
//     // console.log(parseData);
//     setLoading(false);
//     setArticles(articles.concat(parseData.results));
//     setTotalResults(parseData.totalResults);
//   };

  return (
    <>
      <div className="overflow-hidden">
        <div className="w-full flex h-40 gap-10 overflow-x-scroll items-center overflow-y-hidden no-scrollbar">
          {articles.map((element) => {
            return (
              <>
                <NewsItemSmall
                  key={element.article_id}
                  title={element.title ? element.title : ""}
                  // description={element.description ? element.description : ""}
                  imageUrl={element.image_url}
                  date={element.pubDate}
                  newsUrl={element.source_url}
                  author={element.creator}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

// News.defaultProps = {
//   country: "us",
//   // pageSize: 8,
//   category: "sports",
// };
// News.propTypes = {
//   country: PropTypes.string,
//   // pageSize: PropTypes.number,
//   category: PropTypes.string,
// };

export default WorldLatestNews;
