import "./AddPostButton.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AddPostButton = () => {
  const [isButtonPress, setIsButtonPress] = useState(false);
  const navigate = useNavigate();

  const clickHandler = () => {
    setIsButtonPress(!isButtonPress);
    navigate("/addpost");
  };

  return (
    <div className="add-post-button-wrapper">
    <button className="add-post-button" onClick={clickHandler}>
      {isButtonPress ? "Added" : "Добавить пост!"}
    </button>
    </div>
  );
};
