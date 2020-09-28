import React from "react";

const date = new Date();

const Header = () => {
  return (
    <div className="header">
      <h1 className="heading text-center display-2 font-weight-bold">
        Nav bharath news
      </h1>
      <p className="font-weight-light sub-heading text-center pb-2">
        {date.toString()}
      </p>
    </div>
  );
};

export default Header;
