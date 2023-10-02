const apiKey = process.env.REACT_APP_API_KEY;

const requests = {
  requestTopHeadlines: `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`,
  requestTopHeadlinesBBC: `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`,
  requestTopHeadlinesUS: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
  requestEverythingChatGPT: `https://newsapi.org/v2/everything?q=chatgpt&apiKey=${apiKey}`,
};

export default requests;
