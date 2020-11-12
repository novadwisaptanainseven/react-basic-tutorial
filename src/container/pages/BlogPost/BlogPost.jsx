import React, { Component, Fragment } from "react";
import "./BlogPost.css";
import Post from "../../../component/Post/Post";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      userId: 1,
      id: "",
      title: "",
      body: "",
    },
    isUpdate: false,
  };

  // Show the post by getting the API
  getPostApi = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((res) => {
        this.setState({
          post: res.data,
        });
      });
  };

  // Add new post
  handleFormChange = (e) => {
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timestamp = new Date().getTime();
    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = timestamp;
    }
    formBlogPostNew[e.target.name] = e.target.value;
    this.setState(
      {
        formBlogPost: formBlogPostNew,
      },
      () => {
        // console.log("Form Blog Post: ", this.state.formBlogPost);
      }
    );
  };

  handleAddPost = () => {
    if (this.state.isUpdate) {
      this.putDataToApi(this.state.formBlogPost.id);
    } else {
      this.postDataToApi();
    }
  };

  postDataToApi = () => {
    axios.post(`http://localhost:3004/posts`, this.state.formBlogPost).then(
      (res) => {
        this.getPostApi();
        this.setState({
          formBlogPost: {
            userId: 1,
            id: "",
            title: "",
            body: "",
          },
        });
      },
      (err) => {
        console.log("Error: ", err);
      }
    );
  };

  // Update data by id
  putDataToApi = (id) => {
    axios
      .put(`http://localhost:3004/posts/${id}`, this.state.formBlogPost)
      .then(
        (res) => {
          this.getPostApi();
          this.setState({
            isUpdate: false,
            formBlogPost: {
              userId: 1,
              id: "",
              title: "",
              body: "",
            },
          });
        },
        (err) => {
          console.log("Error: ", err);
        }
      );
  };

  handleUpdate = (data) => {
    this.setState(
      {
        formBlogPost: data,
        isUpdate: true,
      },
      () => {
        // console.log(this.state.formBlogPost);
      }
    );
  };

  // Remove the post by id
  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostApi();
    });
  };

  // Redirect to detail page
  handleDetail = (id) => {
    this.props.history.push(`/detail-post/${id}`);
  };

  componentDidMount() {
    this.getPostApi();
  }

  render() {
    return (
      <Fragment>
        <h1>Blog Post</h1>
        <hr />
        <div className="container-blog">
          <p className="heading">Blog Post</p>
          <div className="form-add-post">
            <label htmlFor="title">
              <strong>Title</strong>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="input"
              onChange={this.handleFormChange}
              value={this.state.formBlogPost.title}
            />
            <label htmlFor="body-content">
              <strong>Content</strong>
            </label>
            <textarea
              name="body"
              id="body"
              className="body"
              cols="30"
              rows="10"
              onChange={this.handleFormChange}
              value={this.state.formBlogPost.body}
            ></textarea>
            <button className="btn-add-post" onClick={this.handleAddPost}>
              Save
            </button>
          </div>
          {this.state.post.map((post, index) => {
            return (
              <Post
                key={post.id}
                data={post}
                count={index}
                remove={this.handleRemove}
                update={this.handleUpdate}
                goDetail={this.handleDetail}
              />
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default BlogPost;
