import "./main.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

export const Article = ({ title, content, liked, likePost, deletePost }) => {
  const likeIconColor = liked ? "red" : "grey";
  return (
    <article>
      <div className="title">{title}</div>

      <div className="content">
        <p>{content}</p>
      </div>

      <div className="icons">
        <button onClick={likePost}>
          <FavoriteIcon style={{ fill: likeIconColor }} />
        </button>
        <button onClick={deletePost}>
          <DeleteIcon />
        </button>
      </div>
      <hr />
    </article>
  );
};
