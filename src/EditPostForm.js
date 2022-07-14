import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPostsAction } from "./store/getPosts";

export const EditPostForm = (selectedPost, getAllPosts) => {
  const [title, setTitle] = useState(selectedPost.title);
  const [content, setContent] = useState(selectedPost.content);

  const dispatch = useDispatch();

  const changedPost = {
    title,
    content,
  };
  console.log(changedPost);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const savePost = (e) => {
    e.preventDefault();

    axios
      .put(
        `https://629fd72c461f8173e4f1b3d9.mockapi.io/posts/${selectedPost.post_id}`,
        changedPost
      )
      .then(() => dispatch(getPostsAction()))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={savePost}>
      <div>Редактирование поста</div>

      <div>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChangeTitle}
        />
      </div>

      <div>
        <input
          type="textarea"
          name="content"
          value={content}
          onChange={handleChangeContent}
        />
      </div>

      <div>
        <button type="submit">Сохранить</button>
      </div>
    </form>
  );
};
