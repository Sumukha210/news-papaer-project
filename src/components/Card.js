import React from "react";
import Modal from "./Modal";

import not_found from "./not_found.jpg";

const Card = ({ item, index }) => {
  const { content, description, title, urlToImage } = item;
  const header = title;
  const main_desc = description;
  return (
    <div className="col-md-4 my-2 mt-4 col-lg-4 col-xl-3 col-sm-6">
      <div className="card main-card">
        <div className="card-header h4 heading">
          {header.length > 55
            ? header.replace(header.substr(55, header.length), "...") + "...."
            : header}
        </div>
        <figure>
          <img
            src={urlToImage ? urlToImage : not_found}
            className="img-fluid main_img"
            alt=""
          />
        </figure>
        <div className="card-body">
          <div className="card-title px-3">{main_desc}</div>
          <div className="card-text px-3">
            <button
              type="button"
              className="btn btn-primary read-more"
              data-toggle="modal"
              data-target={`#exampleModal${index}`}
            >
              Read more...
            </button>
            {/* index, title, desc, img_url, content */}
            <Modal
              index={index}
              title={title}
              desc={description}
              img_url={urlToImage}
              content={content}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
