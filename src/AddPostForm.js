import { React, useState } from "react";
import { ReactDOM } from "react-dom";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

export const AddPostForm = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [formDidSend, setFormDidSend] = useState(false);
  const [error, setError] = useState(null);

 const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      content,
    };

    axios
      .post("https://629fd72c461f8173e4f1b3d9.mockapi.io/posts", newPost)
      .then(() => {
        setFormDidSend(true);
        })
      
      .catch((error) => {
        setError(error);
        })
      
  };

  const handleChangeTitle = (e) => {
   setTitle(e.target.value);
  };

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  
    if (error) {
      return error.message;
    }

    return formDidSend ? (
      <Navigate to="/" />
    ) : (
      <form onSubmit={addNewPost}>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Заголовок"
              onChange={handleChangeTitle}
            />
          </div>

          <div className="col-md-4 mb-3">
            <textarea
              type="text"
              name="content"
              value={content}
              placeholder="Текст вашей новости"
              onChange={handleChangeContent}
            />
          </div>
        </div>

        <button className="btn btn-primary" type="submit">
          Add post
        </button>
      </form>
    );
  
}
