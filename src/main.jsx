import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Router, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import News from './components/News.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import SearchNews from './components/SearchNews.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/search" element={<SearchNews/>} />
      <Route
        path="business"
        element={
          <News key="business"   country="in" category="business" />
        }
      />
      <Route
        path="sports"
        element={
          <News key="sports"   country="in" category="sports" />
        }
      />
      <Route
        path="entertainment"
        element={
          <News
            key="entertainment"
             
            country="in"
            category="entertainment"
          />
        }
      />
      <Route
        path="science"
        element={
          <News key="science"   country="in" category="science" />
        }
      />
      <Route
        path="technology"
        element={
          <News
            key="technology"
             
            country="in"
            category="technology"
          />
        }
      />
      <Route
        path="politics"
        element={
          <News
            key="politics"
             
            country="in"
            category="politics"
          />
        }
      />
      <Route
        path="health"
        element={
          <News key="health"   country="in" category="health" />
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
