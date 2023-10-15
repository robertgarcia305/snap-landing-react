import React from "react";

const Body = (props) => {
  return (
    <div className="hero-wrap">
      <div className="top-image">
        <img src="img/image-hero-mobile.png"></img>
      </div>
      <div className="hero-text-wrap">
        <div className="text">
          <h3>{props.item.header}</h3>
          <p>{props.item.paragraph}</p>
          <a>{props.item.button}</a>
        </div>
        <div className="images">
          <div className="image-block">
            <img src="img/client-databiz.svg"></img>
          </div>
          <div className="image-block">
            <img src="img/client-audiophile.svg"></img>
          </div>
          <div className="image-block">
            <img src="img/client-meet.svg"></img>
          </div>
          <div className="image-block">
            <img src="img/client-maker.svg"></img>
          </div>
        </div>
      </div>
      <div className="right-image">
        <img src="img/image-hero-desktop.png"></img>
      </div>
    </div>
  );
};

export default Body;
