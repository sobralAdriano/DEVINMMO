import { CardHeader, Card, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

export const NewsCard = ({ title, description, thumb }) => {
  
  const history = useHistory();

  function navigateToNewsDetails() {
         history.push("/news/:id");
   }

  return (
    <Card >
      <CardMedia  component="img"  height="120" width="50" image={thumb} alt={title} onClick={navigateToNewsDetails} />
      <CardHeader title = {title} />
      <CardContent>
        <Typography variant="inherit" color="text.secondary">
          {description} 
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
};