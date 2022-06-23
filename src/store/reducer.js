import * as actions from "./actionTypes";

const defaultState = {
  posts: [],
  postsLoaded: false
}

export default function reducer(state=defaultState, action) {
  switch (action.type) {
    case actions.LIKE_POST:
      return {
        ...state,
        posts: state.posts.map(post => {
            if (post.id === action.payload.post_id) {
              return {...post, liked: !post.liked}
            }
            return post;
          }
        )
      }

    case actions.SAVE_POSTS:
      return {
        ...state,
        posts: action.payload,
        postsLoaded: true
      }

    // case actions.TASK_TOGGLE:
    //   return state.map((task) => {
    //     if (task.id === action.payload.id)
    //       return { ...task, completed: !task.completed };
    //     return task;
    //   });

    // case actions.TASK_REMOVE:
    //   return state.filter((task) => action.payload.id !== task.id);

    default:
      return state;
  }
}
