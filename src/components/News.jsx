import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const News = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const newsID = doc(db, 'users', `${user?.email}`);

  const saveNews = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      console.log('data', item);
      await updateDoc(newsID, {
        savedNews: arrayUnion({
          id: uuidv4(),
          title: item.title,
          img: item.urlToImage,
        }),
      });
    } else {
      alert('Log in to read the latest news around the world.');
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      {/* check the line below */}
      <img
        className="w-full h-auto block"
        src={item?.urlToImage}
        alt={item?.title}
        size={40}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-75 text-[white] font-bold">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item.title}
        </p>
        <p onClick={saveNews}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default News;
