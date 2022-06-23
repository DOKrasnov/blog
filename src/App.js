import "./App.css";
import { Header } from "./components/header/Header";
import { BlogPosts } from "./BlogPosts";
import { AddPostForm } from "./AddPostForm";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const posts = useSelector(state => state.posts);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/addpost" element={<AddPostForm />} />

        <Route path="/" element={<BlogPosts posts={ posts } />} />
      </Routes>
    </>
  );
}

export default App;
