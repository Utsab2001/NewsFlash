import React from 'react'

const NewsItem2 = (props) => {
  let { title, description, date, imageUrl, newsUrl, author } = props;
  return (
    <>
      <div
        className="flex w-[90%] md:w-[49%] h-36 xs:h-44 sm:h-52 md:h-40 lg:h-48 gap-5 md:gap-3 lg:gap-5 items-center p-3 sm:p-6 md:p-3 lg:p-5"
        to={newsUrl}
      >
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/breaking_latest_news_1200x675_1-sixteen_nine_736.jpg?VersionId=nE.pw_mR4zzTbcv9z1cxN6VuxY3M7UCx"
          }
          alt=""
          className="w-1/4 sm:w-2/5 md:w-1/3 h-16 xs:h-24 sm:h-40 md:h-24 lg:h-32"
        />
        <div className="right flex flex-col w-3/4 sm:w-3/5 md:w-2/3">
          <div className="text-xs xs:text-sm sm:text-base md:text-xs lg:text-sm flex flex-col sm:flex-row md:flex-col gap-1 sm:gap-4 md:gap-2 font-semibold">
            <p className="text-red-600">
              {/* By {author.substring(0, 10)}  Dont know why this is not working */}
              By {author ? author : "Unknown"}
            </p>
            <p className="text-gray-700"> {date}</p>
          </div>
          <a className="md:text-base text-base sm:text-xl lg:text-lg xl:text-xl font-bold">
            {title.substring(0, 50)}...
          </a>
          <p className=" text-sm sm:text-base hidden sm:inline-block md:hidden  md:text-xs lg:text-sm">
            {description
              ? description.substring(0, 60)
              : "Breaking News!You might already know"}
            ...
          </p>
        </div>
      </div>
    </>
  );
}

export default NewsItem2