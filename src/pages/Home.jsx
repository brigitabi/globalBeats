import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../requests';


const Home = () => {
  return (
    <div>
      <Main />
      <Row
        rowID="1"
        title="Top Headlines Around the World"
        fetchURL={requests.requestTopHeadlines}
      />
      <Row title="Top Headlines US" fetchURL={requests.requestTopHeadlinesUS} />
      <Row title="Top Headlines BBC" fetchURL={requests.requestTopHeadlinesBBC} />
      <Row title="Everything" fetchURL={requests.requestEverythingChatGPT} />
    </div>
  );
};

export default Home;
