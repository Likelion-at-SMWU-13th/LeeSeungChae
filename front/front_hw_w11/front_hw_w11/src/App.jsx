import "./App.css";
import { useState } from "react";
import NewsHeader from "./components/NewsHeader";
import SeeNews from "./components/SeeNews";
import NewsList from "./components/NewsList";
import SearchBar from "./components/SearchBar";
import axios from "axios";
const newsApi = import.meta.env.VITE_NEWS_API_KEY;

function App() {
  const [news, setNews] = useState([]);
  const [keyword, setKeyword] = useState("");

  const showNews = () => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApi}`)
      .then((res) => {
        setNews(res.data.articles);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const showSearchNews = () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?qInTitle=${keyword}&from=2025-07-09&sortBy=publishedAt&apiKey=${newsApi}`
      )
      .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChange = ({ target }) => setKeyword(target.value);

  return (
    <>
      <NewsHeader title="Daily News" />
      <SearchBar
        value={keyword}
        handleChange={handleChange}
        showSearchNews={showSearchNews}
      />
      <SeeNews showNews={showNews} />
      <NewsList news={news} />
    </>
  );
}

export default App;
