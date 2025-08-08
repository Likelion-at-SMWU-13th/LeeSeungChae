import "./App.css";
import { useState } from "react";
import NewsHeader from "./components/NewsHeader";
import SeeNews from "./components/SeeNews";
import NewsList from "./components/NewsList";
import axios from "axios";
const newsApi = import.meta.env.VITE_NEWS_API_KEY;

function App() {
  const [news, setNews] = useState([]);

  const showNews = () => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApi}`)
      .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <NewsHeader title="Daily News" />
      <SeeNews showNews={showNews} />
      <NewsList news={news} />
    </>
  );
}

export default App;
