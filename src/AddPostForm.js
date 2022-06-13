import React from "react";
import ReactDOM from "react-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default class AddPostForm extends React.Component {
  state = {
    formDidSend: false,
    postTitle: "",
    postContent: "",
    error: null,
  };

  addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      title: this.state.postTitle,
      content: this.state.postContent,
    };

    axios
      .post("https://629fd72c461f8173e4f1b3d9.mockapi.io/posts", newPost)
      .then(() => {
        this.setState({
          formDidSend: true,
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      });
  };

  inputTitleHandler = (e) => {
    this.setState({
      postTitle: e.target.value,
    });
  };

  inputContentHandler = (e) => {
    this.setState({
      postContent: e.target.value,
    });
  };

  render() {
    if (this.state.error) {
      return this.state.error.message;
    }

    return this.state.formDidSend ? (
      <Navigate to="/" />
    ) : (
      <form onSubmit={this.addNewPost}>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <input
              type="text"
              name="title"
              value={this.state.postTitle}
              placeholder="Заголовок"
              onChange={this.inputTitleHandler}
            />
          </div>

          <div className="col-md-4 mb-3">
            <textarea
              type="text"
              name="content"
              value={this.state.postContent}
              placeholder="Текст вашей новости"
              onChange={this.inputContentHandler}
            />
          </div>
        </div>

        <button className="btn btn-primary" type="submit">
          Add post
        </button>
      </form>
    );
  }
}
