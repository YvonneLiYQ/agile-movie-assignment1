//import React from "react";
import Card from "@mui/material/Card";
//import CardActions from "@mui/material/CardActions";
//import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
//import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
//import StarRateIcon from "@mui/icons-material/StarRate";
//import IconButton from "@mui/material/IconButton";
//import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
//import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import React, { useContext  } from "react";
import { MoviesContext } from "../../contexts/moviesContext";


export default function ActorCard({ actor, action }) {
  const { favorites } = useContext(MoviesContext);
  const { mustWatch } = useContext(MoviesContext);
  

  if (favorites.find((id) => id === actor.id)) {
    actor.favorite = true;
   
  } else {
    actor.favorite = false;
   
  }
  if (mustWatch.find((id) => id === actor.id)) {
    actor.mustWatch = true;
   
  } else {
    actor.mustWatch = false;
   
  }

 

  return (
    <Card sx={{ maxWidth: 345 }}>
     <CardHeader
        avatar={
            actor.favorite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon /> 
            </Avatar>
          ) : 
          actor.mustWatch ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <PlaylistAddIcon /> 
            </Avatar>
          ) : null
         /*movie.watchList ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <Icon /> 
            </Avatar>
          ) : null*/

          }
          
           
            
      
        title={
          <Typography variant="h5" component="p">
            {actor.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
            actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
     
    </Card>
  );
}