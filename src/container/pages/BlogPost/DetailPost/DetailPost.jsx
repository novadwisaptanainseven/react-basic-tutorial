import React, { Component } from "react";
import Axios from "axios";
import Gap from "../../../../component/Gap/Gap";

class DetailPost extends Component {
  state = {
    post: {
      title: "",
      body: "",
    },
  };

  componentDidMount() {
    let params = this.props.match.params;

    Axios.get(`http://localhost:3004/posts/${params.postId}`).then(
      (res) => {
        let result = res.data;
        this.setState({
          post: {
            title: result.title,
            body: result.body,
          },
        });
      },
      (err) => {
        console.log("Error : ", err);
      }
    );
  }

  render() {
    return (
      <div className="detail-wrapper">
        <Gap height={30} />
        <h1 className="title-detail">{this.state.post.title}</h1>
        <p className="body">{this.state.post.body}</p>
      </div>
    );
  }
}

export default DetailPost;
