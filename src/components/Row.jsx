import axios from 'axios';
import React, { useEffect, useState } from 'react';
import News from './News';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({ title, fetchURL, rowID }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setArticles(response.data.articles);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  console.log(title, articles);

  return (
    <div>
      <h2 className="text-black font-bold md:text-xl mt-16 px-8">{title}</h2>
      {/* slider containter */}
      <div className="relative flex items-center group"></div>
      <MdChevronLeft
        onClick={slideLeft}
        size={40}
        className="bg-black left-0 rounded-full absolute opacity-50 hover:opacity-75 cursor-pointer z-10 hidden group-hover:block"
      />

      <div
        id={'slider' + rowID}
        className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative rounded-sm pl-8"
      >
        {articles.map((item, id) => (
          <News key={id} item={item} />
        ))}
      </div>
      <MdChevronRight
        onClick={slideRight}
        size={40}
        className="bg-black right-0 rounded-full absolute opacity-50 hover:opacity-75 cursor-pointer z-10 hidden group-hover:block"
      />
    </div>
  );
};

export default Row;
