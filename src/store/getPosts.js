import axios from "axios";

export const getPostsAction = () => {
  return (dispatch) => {
    dispatch(getPostsStarted());

    axios
      .get("https://629fd72c461f8173e4f1b3d9.mockapi.io/posts")
      .then((response) => dispatch(getPostsSuccess(response.data)))
      .catch((error) => dispatch(getPostsFailure(error.message)));
  };
};

const getPostsStarted = () => ({
  type: "GET_POSTS_STARTED",
});

const getPostsSuccess = (data) => ({
  // скобочки ?
  type: "GET_POSTS_SUCCESS",
  payload: data, // стояли {} для чего ?
});

const getPostsFailure = (error) => ({
  type: "GET_POSTS_FAILURE",
  payload: error,
});

// Reducer
const initialState = {
  posts: [],
  status: "",
  error: null,
};

export default function getPostsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POSTS_STARTED":
      return { ...state, status: "waiting" };

    case "GET_POSTS_SUCCESS":
      return {
        ...state,
        posts: action.payload,
        status: "received",
      };

    case "GET_POSTS_FAILURE":
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
