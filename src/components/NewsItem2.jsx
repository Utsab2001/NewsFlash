import React from 'react'

const NewsItem2 = (props) => {
  let { title, description, date, imageUrl, newsUrl, author } = props;
  return (
    <>
      <div className="flex w-[48%] h-52 mr-2 gap-5 items-center p-5" to={newsUrl}>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://images.pexels.com/photos/902194/pexels-photo-902194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt=""
          className="w-1/3 h-36"
        />
        <div className="right flex flex-col w-2/3">
          <div className="text-sm flex gap-2 font-semibold">
            <p className="text-red-600">By {!author ? "Unknown" : author}</p>
            <p className="text-gray-700"> {date}</p>
          </div>
          <a className="text-lg font-bold">{title.substring(0, 50)}</a>
          <p className="text-sm">
            {description
              ? description.substring(0, 100)
              : "Breaking News!You might already know"}
            ...
          </p>
        </div>
      </div>
    </>
  );
}

export default NewsItem2