import * as actions from "./actionTypes";

export const likePost = (post_id) => ({
  type: actions.LIKE_POST,
  payload: post_id,
});

export const savePosts = (posts) => ({
  type: actions.SAVE_POSTS,
  payload: posts,
});

// export const toggleTask = (id) => ({
//   type: actions.TASK_TOGGLE,
//   payload: { id },
// });

// export const removeTask = (id) => ({
//   type: actions.TASK_REMOVE,
//   payload: { id },
// });
