import React, { useContext } from "react";
import Card from "./Card";
import { DataContext } from "./DataContext";

const CardContainer = () => {
  const [news, setNews] = useContext(DataContext);
  return (
    <div className="row">
      {console.log(news)}
      {news.length ? (
        news.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))
      ) : (
        <h1 className="text-center text-secondary">
          Result is not found , please search something........
        </h1>
      )}
    </div>
  );
};

export default CardContainer;
