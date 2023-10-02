import React from 'react';
import SavedNews from '../components/SavedNews';

const Account = () => {
  return (
    <>
      <div className="w-full text-black">
        <img
          className="absolute w-full h-[400px] object-cover"
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="account"
        />
        <div className="bg-black/20 fixed top-15 left-0 w-full h-[400px]"></div>
        <div className="absolute top-[40%] p-4 md:p-8">
          <h1 className="text-white text-3xl font-bold ms:text-5xl">
            My Saved Articles
          </h1>
        </div>
      </div>
      <SavedNews />
    </>
  );
};

export default Account;
