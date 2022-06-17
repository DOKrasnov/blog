import React from "react";
import "./main.css";
import { Article } from "./Article";
import AddPostForm from "./AddPostForm";
import { AddPostButton } from "./AddPostButton";
import { EditPostForm } from "./EditPostForm";
import axios from "axios";

export default class Main extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    posts: [],
    showEditPostForm: false,
    selectedPost: {},
  };

  handlerShowEditPostForm = (e) => {
    this.setState({ showEditPostForm: !this.state.showEditPostForm });
  };

  handlerSelectedPost = (selectedPost) => {
    this.setState({
      selectedPost,
    });
  };

  getAllPosts = () => {
    axios
      .get("https://629fd72c461f8173e4f1b3d9.mockapi.io/posts")
      .then((response) => {
        this.setState({
          isLoaded: true,
          posts: response.data,
        });
      })

      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  };

  likePost = (item, index) => {
    const tempArr = this.state.posts;
    tempArr[index].liked = !tempArr[index].liked;
    this.setState({ posts: tempArr });
    axios
      .put(
        `https://629fd72c461f8173e4f1b3d9.mockapi.io/posts/${item.post_id}`,
        tempArr[index]
      )
      .then((response) =>
        console.log("Post has been updated => ", response.data)
      )
      .catch((error) => {
        this.setState({
          error,
        });
      });
  };

  deletePost = (item) => {
    if (window.confirm(`Удалить ${item.title} ?`)) {
      this.setState({ isLoaded: false });
      axios
        .delete(
          `https://629fd72c461f8173e4f1b3d9.mockapi.io/posts/${item.post_id}`
        )
        .then((response) => console.log("Post has deleted => ", response.data))
        .then(() => this.getAllPosts())
        .catch((error) => {
          this.setState({
            error,
          });
        });
    }
  };

  savePost = () => {
    console.log("1");
  };

  componentDidMount() {
    this.getAllPosts();
  }

  render() {
    const { error, posts, isLoaded, showEditPostForm } = this.state;

    if (error) return <h1>{error.message}</h1>;

    if (!isLoaded) return <h1>Загружаю данные...</h1>;

    const allPosts = posts.map((item, index) => {
      return (
        <Article
          title={item.title}
          content={item.content}
          liked={item.liked}
          likePost={() => this.likePost(item, index)}
          showEditPost={() => this.handlerShowEditPostForm(item)}
          deletePost={() => this.deletePost(item)}
          handlerSelectedPost={() => this.handlerSelectedPost(item)}
        />
      );
    });

    return (
      <main>
        <AddPostButton />

        {showEditPostForm && (
          <EditPostForm
            selectedPost={this.state.selectedPost}
            getAllPosts={this.getAllPosts}
          />
        )}

        <section className="container-fluid">
          <div>{allPosts}</div>
        </section>
      </main>
    );
  }
}
