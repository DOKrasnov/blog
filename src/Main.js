import React from "react";
import "./main.css";
import { Article } from "./Article";
import AddPostForm from "./AddPostForm";
import { AddPostButton } from "./AddPostButton";
import axios from "axios";

export default class Main extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    posts: [],
  };

  getAllPosts = () => {
    fetch("https://629fd72c461f8173e4f1b3d9.mockapi.io/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
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
      .catch((err) => console.log(err));
  };

  deletePost = (item) => {
    if (window.confirm(`Удалить ${item.title} ?`)) {
      axios
        .delete(
          `https://629fd72c461f8173e4f1b3d9.mockapi.io/posts/${item.post_id}`
        )
        .then((response) => console.log("Post has deleted => ", response.data))
        .then(() => this.getAllPosts())
        .catch((err) => console.log(err));
    }
  };

  componentDidMount() {
    this.getAllPosts();
  }

  render() {
    const { error, posts, isLoaded } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <main>
          <AddPostButton />
          <section className="container-fluid">
            {posts.map((item, index) => {
              return (
                <Article
                  title={item.title}
                  content={item.content}
                  liked={item.liked}
                  likePost={() => this.likePost(item, index)}
                  deletePost={() => this.deletePost(item)}
                />
              );
            })}
          </section>
        </main>
      );
    }
  }
}
