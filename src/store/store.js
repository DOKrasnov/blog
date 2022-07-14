import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import likePostReducer from "./likePost";
import getPostsReducer from "./getPosts";

const reducer = combineReducers({
  getPostsReducer,
  likePostReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
