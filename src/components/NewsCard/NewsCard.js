import { CardHeader, Card, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

export const NewsCard = ({ id, title, genre, description, thumb }) => {
  
  const history = useHistory();

  function navigateToNewsDetails() {
         history.push("/news/:id");
   }

  return (
    <Card >
      <CardHeader title={title} subheader={genre} />
      <CardMedia component="img"  height="120" width="50" image={thumb} alt={title} onClick={navigateToNewsDetails} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
};