import "./main.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { Navigate, useNavigate } from "react-router-dom";

export const Article = ({
  id,
  title,
  content,
  liked,
  likePost,
  deletePost,
  showEditPost,
  handlerSelectedPost,
}) => {
  const likeIconColor = liked ? "red" : "grey";

  const editPost = () => {
    handlerSelectedPost();
    showEditPost();
  };

  return (
    <article key={id}>
      <div className="title">{title}</div>

      <div className="content">
        <p>{content}</p>
      </div>

      <div className="icons">
        <button onClick={likePost}>
          <FavoriteIcon style={{ fill: likeIconColor }} />
        </button>
        <button onClick={editPost}>
          <CreateIcon />
        </button>
        <button onClick={deletePost}>
          <DeleteIcon />
        </button>
      </div>
      <hr />
    </article>
  );
};
