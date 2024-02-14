import React from 'react'

const Header = () => {
//   let h = time.toLocaleTimeString();
  const day = new Date().getDate();
  const date = new Date().toLocaleDateString("locale", { weekday: "short" });
  const month = new Date().toLocaleString("default", { month: "short" });
  const year = new Date().getFullYear();
  return (
    <>
      <div className="bg-black font-semibold h-[40px] text-sm flex justify-around items-center text-white">
        <p className="left">{date} {day} {month} {year}</p>
        <div className="right flex gap-4 ml-10">
          <ul className="flex justify-between gap-3">
            <a href="">About</a>
            <a href="">Something</a>
            <a href="">Contact Us</a>
          </ul>
          <ul className="flex justify-between gap-3">
            <a href="">About</a>
            <a href="">Something</a>
            <a href="">Contact Us</a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header