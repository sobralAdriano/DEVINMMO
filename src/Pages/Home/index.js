import { Button, Container } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import BackgroundImage from "../../assets/img/background_gamer.jpg";

export const HomePage = () => {
  
const history = useHistory();

 function navigateToGames() {
        history.push("/games");
  }

  function navigateToNews(){
      history.push("/news");
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background:  `url(${BackgroundImage})`,
        color: "#FFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textTransform: "uppercase",
        fontSize: "3rem",
      
      }}
    > 
      <Container>
        <h1>DEVINMMO</h1>
        <p>Onde você encontra as novidades dos Games e as últimas notícias</p>
        <Button color="primary" spacing = {2} variant="contained" size="large" onClick={navigateToGames}>GAMES</Button>
        <Button color="secondary" spacing = {5} variant="contained" size="large" onClick={navigateToNews}>NEWS</Button>
      </Container>
    </div>
  );
};
