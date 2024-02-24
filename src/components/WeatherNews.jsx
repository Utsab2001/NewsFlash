import React, { useEffect, useState } from "react";
import NewsItemSmall from "./NewsItemSmall";
import NewsItem2 from "./NewsItem2";

//pub_38598485278dd4b38de6d9f7138fdd00952a1 Another ApI Key

const WeatherNews = () => {
  const [articles, setArticles] = useState([]);

  const updateNews = async () => {
    let url = `https://newsdata.io/api/1/news?apikey=pub_38598485278dd4b38de6d9f7138fdd00952a1&country=in&q=weather NOT world&language=en`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.results);
    // setTotalResults(parseData.totalResults);
  };

  useEffect(() => {
    updateNews();
  }, []);
  return (
    <>
      <div className="mt-4 w-full ">
        <h2 className="text-2xl mb-2 p-2 font-bold">
          <span className="text-red-600">Weather</span> Update
        </h2>
        <div className="w-full flex flex-wrap h-full items-center justify-between">
          {articles.map((element) => {
            return (
              <>
                <NewsItem2
                  key={element.article_id}
                  title={element.title ? element.title : ""}
                  // description={element.description ? element.description : ""}
                  imageUrl={element.image_url}
                  date={element.pubDate}
                  newsUrl={element.source_url}
                  author={element.creator}
                />
                {/* <NewsItemSmall
                  key={element.article_id}
                  title={element.title ? element.title : ""}
                  // description={element.description ? element.description : ""}
                  imageUrl={element.image_url}
                  date={element.pubDate}
                  newsUrl={element.source_url}
                  author={element.creator}
                /> */}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WeatherNews;
