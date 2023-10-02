import React, { useEffect, useState } from 'react';
import requests from '../requests';
import axios from 'axios';

const Main = () => {
  const [articles, setArticles] = useState([]);

  const news = articles[Math.floor(Math.random() * articles.length)];

  useEffect(() => {
    axios.get(requests.requestTopHeadlines).then((response) => {
      console.log('response', response);
      setArticles(response.data.articles);
    });
  }, []);

  console.log(news);

  return (
    <div className="w-full h-[600px] py-4 px-8">
      <div className="w-full h-full">
        <div className="absolute w-full h-[650px] "></div>
        {/* bg-gradient-to-r from-black */}
        <img
          className="w-full h-full object-cover"
          src={news?.urlToImage}
          alt="News"
        />
        <div className="absolute w-full top-[60%] p-4 md:p-8">
          <div className="absolute bottom-0 right-5 mb-5 mr-12">
            <button className="border bg-[white] text-black font-bold border-gray-900 py-2 px-8 rounded-md">
              Read
            </button>
            <button className="border bg-gray-300 text-black font-bold border-gray-700 py-2 px-2 ml-4 rounded-md">
              Read Later
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text md:text-3xl text-black font-bold mb-10">
          {news?.title}
        </h1>
      </div>
    </div>
  );
};

export default Main;
