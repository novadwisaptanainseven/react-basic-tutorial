import React, { Component } from "react";
import Gap from "../Gap/Gap";

const Post = (props) => {
  let linkImg = `https://placeimg.com/20${props.count}/15${props.count}/tech`;
  // "https://placeimg.com/20" + props.count + "/15" + props.count + "/tech";
  // "https://placeimg.com/200/150/tech"

  return (
    <div className="post">
      <div className="img-thumbnail">
        <img src={linkImg} alt="DummyImage" />
      </div>
      <div className="content">
        <p className="title" onClick={() => props.goDetail(props.data.id)}>
          {props.data.title}
        </p>
        <p className="desc">{props.data.body}</p>
        <Gap height={20} />
        <button className="btn-update" onClick={() => props.update(props.data)}>
          Update
        </button>
        <button
          className="btn-remove"
          onClick={() => props.remove(props.data.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Post;
