import React from 'react'

const NewsItemSmall = (props) => {
     let { title, date, imageUrl, newsUrl, author } = props;
  return (
    <>
      <div className="flex w-[420px] mr-2 gap-5">
        <img src={imageUrl} alt="" className="w-[100px] h-20" />
        <div className="right flex flex-col w-[350px]">
          <div className="text-xs flex gap-2 font-semibold">
            <p className="text-red-600">By {author}</p>
            <p className="text-gray-600"> {date}</p>
          </div>
          <a href={newsUrl} className="text-base cursor-pointer font-bold">
            {title.substring(0, 50)}
          </a>
        </div>
      </div>
    </>
  );
}

export default NewsItemSmall