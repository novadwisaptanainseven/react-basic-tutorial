import React, { Fragment } from "react";
import "./YouTubeComp.css";

// Membuat Component Youtube
const YouTubeComp = (props) => {
  let styleCSS = {
    backgroundImage: `url(https://placeimg.com/20${props.count}/15${props.count}/tech)`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: 'cover'
  };

  return (
    <Fragment>
      <div className="youtube-wrapper">
        <div className="thumbnail" style={styleCSS}>
          <p className="time">{props.time}</p>
        </div>
        <div className="card-body">
          <p className="title">{props.title}</p>
          <p className="desc">{props.desc}</p>
        </div>
      </div>
    </Fragment>
  );
};

YouTubeComp.defaultProps = {
  time: "00.00",
  title: "Title here",
  desc: "x ditonton. x hari yang lalu",
};

export default YouTubeComp;
