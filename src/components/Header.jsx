import React from 'react'

const Header = () => {
//   let h = time.toLocaleTimeString();
  const day = new Date().getDate();
  const date = new Date().toLocaleDateString("locale", { weekday: "short" });
  const month = new Date().toLocaleString("default", { month: "short" });
  const year = new Date().getFullYear();
  return (
    <>
      <div className="bg-black font-semibold h-[30px] sm:h-[40px] text-xs sm:text-sm px-5 sm:px-10 flex justify-between items-center text-white">
        <p className="left">
          {date} {day} {month} {year}
        </p>
        <div className="right flex gap-6 ml-10">
          <ul className="flex font-semibold justify-between gap-3">
            <a href="">News</a>
            <a href="/contact">Contact Us</a>
            <a href="/search">
              <img src="/search.png" alt="" width={20} />
            </a>
          </ul>
          <ul className="flex justify-between gap-3 items-center">
            <a href="">
              <img src="/facebook.png" alt="" className="w-3 sm:w-4" />
            </a>
            <a href="">
              <img src="/twitter.png" alt="" className="w-3 sm:w-4" />
            </a>
            <a href="">
              <img src="/instagram.png" alt="" className="w-3 sm:w-4" />
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header