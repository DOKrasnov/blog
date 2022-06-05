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
    <button onClick={clickHandler}>
      {isButtonPress ? "Added" : "Добавить пост!"}
    </button>
  );
};
