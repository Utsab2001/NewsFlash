import React, { useEffect, useState } from "react";
import NewsItemSmall from "./NewsItemSmall";
//pub_38598485278dd4b38de6d9f7138fdd00952a1 Another ApI Key

const SmallNews = (props) => {
  const [articles, setArticles] = useState([]);

  const updateNews = async () => {
    let url = `https://newsdata.io/api/1/news?apikey=pub_38598485278dd4b38de6d9f7138fdd00952a1&q=war AND israel AND russia AND palestine AND ukraine&language=en`;
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
      <div className="flex flex-col mt-5">
        <h2 className="text-xl p-2 font-bold">
          What's happeing in <span className="text-red-600">World?</span>
        </h2>
        <div className="w-full px-2 flex h-[100px] gap-10 overflow-x-scroll items-center overflow-y-hidden no-scrollbar">
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

export default SmallNews;
