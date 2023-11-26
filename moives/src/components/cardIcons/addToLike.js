import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToLikesIcon = ({ person }) => {
  const context = useContext(MoviesContext);

  const handleAddToLikes = (e) => {
    e.preventDefault();
    context.addToLikes(person);
  };
  return (
    <IconButton aria-label="add to likes" onClick={handleAddToLikes}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToLikesIcon;