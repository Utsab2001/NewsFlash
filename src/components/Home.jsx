import React from 'react'
import BreakingNews from './BreakingNews'
import Others from './Others'
import WarNews from './WarNews';
import WeatherNews from './WeatherNews';

const Home = () => {
  return (
    <div className="w-full flex-col">
      <div className="w-full h-96 px-2 pl-0 flex">
        <Others />
        <BreakingNews />
      </div>
      <WarNews />
      <WeatherNews/>
    </div>
  );
}

export default Home