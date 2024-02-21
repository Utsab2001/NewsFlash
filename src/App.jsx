import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import News from "./components/News";
// import WorldLatestNews from './components/WorldLatestNews'
// import BreakingNews from './components/BreakingNews'
// import Home from './components/Home'
import { Outlet } from "react-router-dom";
import SmallNews from "./components/SmallNews";
import Others from "./components/Others";
import Contact from "./components/Contact";
import SearchBar from "./components/SearchBar";
import SearchNews from "./components/SearchNews";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Navbar />
      {/* <SearchNews/> */}
      {/* <Others /> */}
      <SmallNews/>
      <Outlet />
      {/* <Contact/> */}
      {/* <Home/> */}
      {/* <WorldLatestNews/> */}
      {/* <BreakingNews /> */}
      {/* <News /> */}
    </>
  );
}

export default App;
