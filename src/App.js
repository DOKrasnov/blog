import "./App.css";
import Header from "./Header";
import Main from "./Main";
import AddPostForm from "./AddPostForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/addpost" element={<AddPostForm />} />

        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
