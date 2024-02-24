import React from 'react'

const BreakingNewsItem = (props) => {
     let { title, date, imageUrl, newsUrl, author } = props;
  return (
    <>

      <div
        className="left mb-1 w-[95%] sm:w-[49.5%] md:w-full h-[200px] md:h-1/2 flex flex-col gap-2 bg-cover bg-center items-left justify-end p-3 relative"
        style={{ backgroundImage: `url(${imageUrl?imageUrl:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/breaking_latest_news_1200x675_1-sixteen_nine_736.jpg?VersionId=nE.pw_mR4zzTbcv9z1cxN6VuxY3M7UCx"})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <a href={newsUrl} className="text-base z-10 relative font-bold text-white">
          {title.substring(0,50)}..
        </a>
        <div className="flex gap-2 z-10 relative">
          <p className="text-xs font-semibold text-red-600">
            By {author?author:`Unknown`}
          </p>
          <p className="text-xs font-semibold text-white">
            {date}
          </p>
        </div>
      </div>
    </>
  );
}

export default BreakingNewsItem