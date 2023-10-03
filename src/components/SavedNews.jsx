import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';

const SavedNews = () => {
  const [articles, setArticles] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setArticles(doc.data()?.savedNews);
    });
  }, [user?.email]);

  const newsRef = doc(db, 'users', `${user?.email}`);

  const deleteShow = async (passedID) => {
    try {
      const result = articles.filter((item) => item.id !== passedID);
      await updateDoc(newsRef, {
        savedNews: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="text-black font-bold md:text-xl p-4 py-60">My Articles</h2>
      {/* slider containter */}
      <div className="relative flex items-center group"></div>
      <MdChevronLeft
        onClick={slideLeft}
        size={40}
        className="bg-black left-0 rounded-full absolute opacity-50 hover:opacity-75 cursor-pointer z-10 hidden group-hover:block"
      />

      <div
        id={'slider'}
        className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative rounded-sm mt-10 pl-4"
      >
        {articles.map((item, id) => (
          <div
            key={uuidv4()}
            className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
          >
            {/* check the line below */}
            <img
              className="w-full h-auto block rounded-full"
              src={item?.img}
              alt={item?.title}
              size={40}
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-75 text-[white] font-bold">
              <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                {item.title}
              </p>
              <p
                onClick={() => deleteShow(item.id)}
                className="absolute text-gray-400 top-4 right-4"
              >
                <AiOutlineClose />{' '}
              </p>
            </div>
          </div>
        ))}
      </div>
      <MdChevronRight
        onClick={slideRight}
        size={40}
        className="bg-black right-0 rounded-full absolute opacity-50 hover:opacity-75 cursor-pointer z-10 hidden group-hover:block"
      />
    </>
  );
};

export default SavedNews;
