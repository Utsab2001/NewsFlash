import React from 'react'

const BreakingNewsItem = (props) => {
     let { title, date, imageUrl, newsUrl, author } = props;
  return (
    <>
      <div
        className="left w-full h-1/2 flex flex-col gap-2 bg-cover bg-center items-left justify-end p-3 relative"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <a href={newsUrl} className="text-base z-10 relative font-bold text-white">
          {title.substring(0,50)}..
        </a>
        <div className="flex gap-2 z-10 relative">
          <p className="text-xs font-semibold text-red-600">
            By {author}
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