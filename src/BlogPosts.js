import React, { useState, useEffect } from "react";
import "./BlogPosts.css";
import { Post } from "./Post";
import { AddPostButton } from "./AddPostButton";
import { EditPostForm } from "./EditPostForm";
import axios from "axios";
import { likePostAction } from "./store/likePost";
import store from "./store/store";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction } from "./store/getPosts";

export const BlogPosts = ({ posts }) => {
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);
  // const error = useSelector((state) => state.error);
  const [selectedPost, setSelectedPost] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);

  const handleShowEditForm = (e) => {
    setShowEditForm(!showEditForm);
  };

  const handleSelectedPost = (selectedPost) => {
    setSelectedPost(selectedPost);
  };

  // const getAllPosts = () => {

  // axios
  //   .get("https://629fd72c461f8173e4f1b3d9.mockapi.io/posts")
  //   .then((response) => {
  //     dispatch(savePosts(response.data));
  //   })

  //   .then(() => {
  //     setIsLoaded(true);
  //   })

  //   .catch((error) => {
  //     setIsLoaded(true);
  //     setError(error);
  //   });

  // likePost = (item, index) => {
  //   const tempArr = this.state.posts;
  //   tempArr[index].liked = !tempArr[index].liked;
  //   this.setState({ posts: tempArr });
  //   axios
  //     .put(
  //       `https://629fd72c461f8173e4f1b3d9.mockapi.io/posts/${item.post_id}`,
  //       tempArr[index]
  //     )
  //     .then((response) =>
  //       console.log("Post has been updated => ", response.data)
  //     )
  //     .catch((error) => {
  //       this.setState({
  //         error,
  //       });
  //     });
  // };

  const deletePost = (item) => {
    if (window.confirm(`Удалить ${item.title} ?`)) {
      setIsLoaded(false);
      axios
        .delete(
          `https://629fd72c461f8173e4f1b3d9.mockapi.io/posts/${item.post_id}`
        )
        .then(() => dispatch(getPostsAction()));
      // .catch((error) => {
      //   setError(error);
      //     });
    }
  };

  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  // if (error) return <h1>{error}</h1>;

  // if (!isLoaded) return <h1>Загружаю данные...</h1>;

  const allPosts = posts.map((item, index) => {
    return (
      <Post
        key={item.post_id}
        title={item.title}
        content={item.content}
        liked={item.liked}
        // likePost={() => this.likePost(item, index)}
        likePost={() => dispatch(likePostAction(item))}
        handleShowEditForm={() => handleShowEditForm(item)}
        handleSelectedPost={() => handleSelectedPost(item)}
        deletePost={() => deletePost(item)}
      />
    );
  });

  return (
    <main>
      <AddPostButton />

      {showEditForm && (
        <EditPostForm
          selectedPost={selectedPost}
          // getAllPosts={getAllPosts}
        />
      )}

      <section className="container-fluid">
        <div>{allPosts}</div>
      </section>
    </main>
  );
};
