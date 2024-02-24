
import React, { useEffect, useState } from "react";
import NewsItem2 from "./NewsItem2";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchBar from "./SearchBar";

const SearchNews = (props) => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [categoryValue, setCategoryValue] = useState("general");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    let url = `https://newsdata.io/api/1/news?apikey=pub_38598485278dd4b38de6d9f7138fdd00952a1&country=${props.country}&q=${category}&language=en`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    setPage(parseData.nextPage);
    console.log(page);
    setLoading(false);
    setArticles(parseData.results);
    setTotalResults(parseData.totalResults);
  };

  const fetchMoreData = async () => {
    let url = `https://newsdata.io/api/1/news?apikey=pub_38598485278dd4b38de6d9f7138fdd00952a1&country=${props.country}&q=${category}&language=en&page=${page}`;
    setLoading(articles.length !== totalResults);
    let data = await fetch(url);
    let parseData = await data.json();
    setPage(parseData.nextPage);
    // console.log(parseData);
    setLoading(false);
    setArticles(articles.concat(parseData.results));
    setTotalResults(parseData.totalResults);
  };
      const handleInputChange = (event) => {
        setCategoryValue(event.target.value);
      };
      const handleSearch =async () => {    try {
        setCategory(categoryValue);
      const apiUrl = `https://newsdata.io/api/1/news?apikey=pub_38598485278dd4b38de6d9f7138fdd00952a1&country=${props.country}&q=${category}&language=en`;
      const data = await fetch(apiUrl);
      // setNewsData(response.data); // Assuming response.data contains the news data
    let parseData = await data.json();    
      setPage(parseData.nextPage);
          // console.log(parseData);
          setLoading(false);
          setArticles(articles.concat(parseData.results));
          setTotalResults(parseData.totalResults);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
      };
      
  useEffect(() => {
    updateNews();
  }, []);
  useEffect(() => {
    updateNews();
  }, [category]);

  return (
    <>
      <div className="flex mt-2 justify-center">
        <SearchBar
          placeholder={`Search for news i.e election, rail, exam etc.`}
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
        />
      </div>
      <div className="overflow-hidden">
        <h2 className="text-center my-3 text-3xl font-semibold">
          {/* Trending headlines on {capitalizeFirstLetter(category)} */}
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

SearchNews.defaultProps = {
  country: "in",
};
SearchNews.propTypes = {
  country: PropTypes.string,
};

export default SearchNews;
