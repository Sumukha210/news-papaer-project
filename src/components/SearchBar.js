import React, { useContext, useState } from "react";
import { DataContext } from "./DataContext";

import search_icon from "./search-solid.svg";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const [news, setNews, topicName, setTopicName] = useContext(DataContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    setTopicName(e.target.input.value);
    setInputValue("");
  };

  return (
    <form onSubmit={HandleSubmit}>
      <div className="input-group search-bar w-75 mb-3">
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search something and then press enter...."
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="input"
        />
        <span className="input-group-text" id="basic-addon1">
          <img src={search_icon} alt="" />
        </span>
      </div>
    </form>
  );
};

export default SearchBar;
