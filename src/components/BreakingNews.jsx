import React, { useEffect, useState } from "react";
import BreakingNewsItem from "./BreakingNewsItem";

const BreakingNews = () => {
  const [articles, setArticles] = useState({});
  //   const [loading, setLoading] = useState(true);
  //   const [page, setPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const updateNews = async () => {
    let url = `https://newsdata.io/api/1/news?apikey=pub_36951e614f10eaeef6d1b28492267368eb358&country=in&q=latest AND breaking AND politics&language=en`;
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
  useEffect(() => {
    console.log(articles[0]);
  }, [articles]);
  return (
    <>
      {articles && articles[0] && (
        <div className="w-3/4 h-full flex overflow-hidden">
          <div
            className="left w-2/3 h-full flex flex-col gap-3 bg-cover bg-center items-left justify-end p-5 relative"
            style={{ backgroundImage: `url(${articles[0].image_url})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <p className="bg-red-600 font-semibold text-white p-2 z-10 relative text-sm w-fit">
              Breaking News
            </p>
            <a
              href={articles[0].source_url}
              className="text-2xl z-10 relative font-bold text-white"
            >
              {articles[0].title ? articles[0].title : "Breaking News"}
            </a>
            <div className="flex gap-3 z-10 relative">
              <p className="text-sm font-semibold text-red-600">
                By {articles[0].creator ? articles[0].creator : "Unknown"}
              </p>
              <p className="text-sm font-semibold text-white">
                {articles[0].pubDate}
              </p>
            </div>
          </div>
          <div className="right w-1/3 p-1 pr-0 gap-1 h-auto overflow-x-hidden overflow-y-scroll no-scrollbar">
            {articles.map((element) => {
              return (
                <>
                  <BreakingNewsItem
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
      )}
    </>
  );
};

export default BreakingNews;
