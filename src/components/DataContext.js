import Axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataContextProvider = (props) => {
  const [topicName, setTopicName] = useState("");
  const [news, setNews] = useState([]);

  const Api_key = process.env.REACT_APP_API_KEY;
  const Url = `https://newsapi.org/v2/`;
  const FullUrl = topicName
    ? `${Url}everything?q=${topicName}&apiKey=${Api_key}`
    : `${Url}top-headlines?country=in&apiKey=${Api_key}`;

  const FetchNews = async () => {
    const res = await Axios.get(FullUrl);
    const data = await res;
    setNews(data.data.articles);
  };

  useEffect(() => {
    FetchNews();
  }, [topicName]);

  return (
    <DataContext.Provider value={[news, setNews, topicName, setTopicName]}>
      {props.children}
    </DataContext.Provider>
  );
};
