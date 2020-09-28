import React from "react";

const Modal = ({ index, title, desc, img_url, content }) => {
  return (
    <div
      className="modal fade"
      id={`exampleModal${index}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="card">
              <img src={img_url} className="card-img-top" alt="" />
              <div className="card-body">
                <div className="card-title">{desc}</div>
                <div className="card-text">{content}</div>
              </div>
            </div>
          </div>
          <div className="modal-footer text-center">
            <button
              type="button"
              className="btn btn-info d-block"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
