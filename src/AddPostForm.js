import React from "react";
import ReactDOM from "react-dom";
import { Navigate } from "react-router-dom";

export default class AddPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formDidSend: false,
    };
  }

  fetchData = (event) => {
    event.preventDefault();
    var form = document.querySelector("form");

    const formData = new FormData(form);
    fetch("http://localhost/blog/src/insertPost.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        this.setState({ formDidSend: true });
      });
    return false;
  };

  render() {
    return this.state.formDidSend ? (
      <Navigate to="/" />
    ) : (
      <form onSubmit={this.fetchData} className="needs-validation" noValidate>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="title">Заголовок</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Заголовок"
              required
            />
            <div className="valid-tooltip">Looks good!</div>
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="content">Текст новости</label>
            <textarea
              type="text"
              className="form-control"
              id="content"
              name="content"
              placeholder="Текст вашей новости"
              required
            />
            <div className="valid-tooltip">Looks good!</div>
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="user">Автор</label>
            <input
              type="text"
              className="form-control"
              id="user"
              name="user"
              placeholder="Имя"
              required
            />
            <div className="invalid-tooltip">
              Please choose a unique and valid username.
            </div>
          </div>
        </div>

        <button className="btn btn-primary" type="submit">
          Add post
        </button>
      </form>
    );
  }
}
