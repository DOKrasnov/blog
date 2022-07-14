import axios from "axios";
import { getPostsAction } from "./getPosts";

const defaultState = {
  posts: [],
};

export const likePost = (post) => ({
  type: "LIKE_POST",
  payload: post,
});

export const likePostAction = (post) => {
  return (dispatch) => {
    dispatch(likePost(post));

    axios
      .put(`https://629fd72c461f8173e4f1b3d9.mockapi.io/posts/${post.post_id}`)
      .then(dispatch(getPostsAction())); // Нужно ли вручную обновлять ???
  };
};

export default function likePostReducer(state = defaultState, action) {
  switch (action.type) {
    case "LIKE_POST":
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.post_id == action.payload.post_id) {
            return { ...post, liked: !post.liked };
          }

          return post;
        }),
      };

    default:
      console.log("default", state);
      return state;
  }
}
