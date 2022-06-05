import React from "react";
import "./main.css";
import { Article } from "./Article";
import AddPostForm from "./AddPostForm";
import { AddPostButton } from "./AddPostButton";

export default class Main extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    posts: [],
  };

  likePost = () => {
    console.log("1");
  };

  deletePost = (item, index) => {
    if (window.confirm(`Удалить ${item.title} ?`)) {
      const deletePostID = {
        post_id: index,
      };
      fetch("http://localhost/blog/src/deletePost.php", {
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(deletePostID),
      })
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
    }
  };

  componentDidMount() {
    fetch("http://localhost/blog/src/getAllPosts.php")
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
                  linkToArticle="#"
                  content={item.content}
                  user={item.user}
                  date={item.date}
                  likePost={() => this.likePost(index)}
                  deletePost={() => this.deletePost(item, index)}
                />
              );
            })}
          </section>
        </main>
      );
    }
  }
}

// React Router -> Разбить на страницы
// 1. Все посты
// 2. Пост целиком на отдельной странице
// 3. Добавить пост

// Класс VS Hook

// Почему нельзя менять напрямую в state без setState

// При выносе из render не отрисовывается компонент
