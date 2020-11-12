import React, { Component, Fragment } from "react";
import YouTubeComp from "../../../component/YouTubeComp/YouTubeComp";

class Youtube extends Component {
  render() {
    return (
      <Fragment>
        <h1>Youtube Component</h1>
        <hr />
        <YouTubeComp
          time="12.10"
          title="Tutorial React JS - Bagian 1"
          desc="2x ditonton, 2 hari yang lalu"
          count="1"
        />
        <YouTubeComp
          time="8.00"
          title="Tutorial React JS - Bagian 2"
          desc="3x ditonton, 6 hari yang lalu"
          count="2"
        />
        <YouTubeComp
          time="10.15"
          title="Tutorial React JS - Bagian 3"
          desc="16x ditonton, 3 hari yang lalu"
          count="3"
        />
        <YouTubeComp
          time="22.06"
          title="Tutorial React JS - Bagian 4"
          desc="7x ditonton, 1 hari yang lalu"
          count="4"
        />
      </Fragment>
    );
  }
}

export default Youtube;
