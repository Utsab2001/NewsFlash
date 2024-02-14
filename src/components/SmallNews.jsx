import React, { useEffect, useState } from "react";
import NewsItemSmall from "./NewsItemSmall";

const SmallNews = (props) => {
      const [articles, setArticles] = useState([]);
      
  const updateNews = async () => {
    let url = `https://newsdata.io/api/1/news?apikey=pub_36951e614f10eaeef6d1b28492267368eb358&&q=breaking AND latest&language=en`;
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
    </>
  );
};

export default SmallNews;
