import React from "react";
import fb from "./fb.svg";
import insta from "./insta.svg";
import twitter from "./twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-2">
              © Copyright 2020-21 (500 requests per day only)
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
              Designed by sumukha kb
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-2">
              Credits:{" "}
              <span className="text-uppercase">
                news api,font awesome icons
              </span>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
              Follw me on :
              <span>
                <a href="https://www.facebook.com/sumukhakandika.balakrishna">
                  <img src={fb} alt="" className="fb" />{" "}
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com/sumukhakb/?hl=en">
                  <img src={insta} alt="" className="insta" />{" "}
                </a>
              </span>
              <span>
                <a href="https://twitter.com/sumukha210">
                  <img src={twitter} alt="" className="twitter" />{" "}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
