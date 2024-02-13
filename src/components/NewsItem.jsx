import React from "react";

export default function NewsItem(props) {
  let { title, description, date, imageUrl, newsUrl, author } = props;
  return (
    <>
      <div className="w-full xs:w-11/12 xsm:w-[85%] sm:w-5/6 flex flex-col justify-between md:w-[45%] lg:w-[31%] bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-2 mx-2">
        <img
          className="rounded-t-lg h-60 w-full object-fill xsm:h-72 lg:h-60 "
          src={
            imageUrl
              ? imageUrl
              : "https://images.pexels.com/photos/902194/pexels-photo-902194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt=""
        />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {/* Noteworthy technology acquisitions 2021 */}
              {title
                ? title.substring(0, 80)
                : "Unprecedented Discovery Sparks Global Excitement: Experts Weigh In on Groundbreaking Advancements."}
              ...
              <br />
              <span className="text-base font-normal">
                By {!author ? "Unknown" : author} on {"    "}{" "}
                {new Date(date).toGMTString()}
              </span>
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-400">
            {description
              ? description.substring(0, 100)
              : "Unprecedented Discovery Sparks Global Excitement: Experts Weigh In on Groundbreaking Advancements."}
            ...
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          >
            Read more
          </a>
        </div>
      </div>
    </>
  );
}
