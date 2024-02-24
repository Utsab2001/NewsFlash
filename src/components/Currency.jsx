import React, { useState, useEffect } from "react";

const Currency = () => {
  const [currency, setCurrency] = useState({});
  const [date, setDate] = useState("");
  // const [dollar, setDollar] = useState();
  const fetchCurrency = async () => {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr.json`;
    try {
      let data = await fetch(url);
      if (data.ok) {
        let parseData = await data.json();
        setCurrency(parseData.inr);
        setDate(parseData.date);
        console.log(parseData);
        // console.log(currency);//does not work
      } else {
        console.error(
          "Something went wrong while fetching Currency data:",
          data.status
        );
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  useEffect(() => {
    fetchCurrency();
  }, []);
  useEffect(() => {
    // setDollar(currency.usd);
    // console.log(currency.usd);
    // console.log(dollar);
  }, [currency]);
  return (
    <>
      {currency && (
        <div
          className="w-full h-64 md:h-72 gap-2 md:gap-3 rounded-xl flex flex-col p-2 md:p-3 text-white justify-center "
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          }}
        >
          <div className="flex py-2 justify-between">
            <p className="text-xs text-teal-500 font-semibold ml-1">
              Currency Rate
            </p>
            <p className="text-xs text-gray-400 font-semibold ml-1">
              Updated: {date}
            </p>
          </div>

          <div
            className="flex flex-col gap-2 p-2 rounded-lg w-full"
            style={{ backgroundColor: "rgba(48, 58, 58, 0.7)" }}
          >
            <p className="text-xs">Dollar</p>
            <div className="text-sm  flex gap-2 items-center">
              <p>1 $ =₹ {1 / currency.usd}</p>
              <img src="/decrease.png" alt="" className="w-5" />
            </div>
          </div>
          <div
            className="flex flex-col gap-2 p-2 rounded-lg w-full"
            style={{ backgroundColor: "rgba(48, 58, 58, 0.7)" }}
          >
            <p className="text-xs">Euro</p>
            <div className="text-sm flex gap-2 items-center">
              <p>1 € =₹ {1 / currency.eur}</p>
              <img src="/increase.png" alt="" className="w-5" />
            </div>
          </div>
          <div
            className="flex flex-col gap-2 p-2 rounded-lg w-full"
            style={{ backgroundColor: "rgba(48, 58, 58, 0.7)" }}
          >
            <p className="text-xs">Pound</p>
            <div className="text-sm flex gap-2 items-center">
              <p>1 £ =₹ {1 / currency.gbp}</p>
              <img src="/decrease.png" alt="" className="w-5" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Currency;
