import React from 'react'
import BreakingNews from './BreakingNews'
import Others from './Others'
import WarNews from './WarNews';
import WeatherNews from './WeatherNews';
import Weather from './Weather';
import Currency from './Currency';

const Home = () => {
  return (
    <div className="w-full flex-col">
      <div className="w-full h-auto md:h-96 px-2 pl-0 flex">
        <div className="w-1/4 hidden lg:flex overflow-x-hidden lg:flex-col p-1 lg:gap-1 overflow-y-scroll no-scrollbar">
          {/* <Others /> */}
          <Weather />
          <Currency />
        </div>
        <BreakingNews />
      </div>
      <div className="w-full md:hidden flex overflow-y-hidden p-1 gap-1 overflow-x-scroll no-scrollbar">
        <Weather />
        <Currency />
      </div>
      <WarNews />
      <WeatherNews />
    </div>
  );
}

export default Home