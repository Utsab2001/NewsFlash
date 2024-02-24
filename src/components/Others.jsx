import React from 'react'
import Weather from './Weather';
import Currency from './Currency';

const Others = () => {
  return (
    <>
      <div className="w-1/4 flex overflow-x-hidden lg:flex-col p-1 lg:gap-1 overflow-y-scroll no-scrollbar">
        <Weather/>
        <Currency/>
      </div>
    </>
  );
}

export default Others