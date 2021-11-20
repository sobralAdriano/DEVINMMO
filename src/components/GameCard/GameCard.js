import { CardHeader, Card, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

export const GameCard = ({ id, title, genre, description, thumb }) => {
  
  const history = useHistory();

  function navigateToGamesDetails() {
         history.push(`/games/:${id}`);
   }

  return (
    <Card >
      
      <CardMedia component="img"  height="200" width="100" image={thumb} alt={title} onClick={navigateToGamesDetails} />
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
};