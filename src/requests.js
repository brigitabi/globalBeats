const apiKey = process.env.REACT_APP_API_KEY;
const serverUrl = process.env.REACT_APP_API_SERVER_URL;

const requests = {
  requestTopHeadlines: `${serverUrl}/topheadlines?sources=techcrunch&apiKey=${apiKey}`,
  requestTopHeadlinesBBC: `${serverUrl}/topheadlines?sources=bbc-news&apiKey=${apiKey}`,
  requestTopHeadlinesUS: `${serverUrl}/topheadlines?country=us&apiKey=${apiKey}`,
  requestEverythingChatGPT: `${serverUrl}/everything?q=chatgpt&apiKey=${apiKey}`,
};

export default requests;
