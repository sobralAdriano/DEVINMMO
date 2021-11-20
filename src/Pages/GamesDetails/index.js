import { Button, Chip, CircularProgress, Divider, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useListedGames } from "../../PageContexts/PageContext";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { DefaultPage } from "../../templates/DefaultPage";

const DetailedGame = () => {

    const history = useHistory (); 
    
    function navigateToGames() {
        history.push("/games");
    }
    
    const {id} = useParams();
    const { state, fetchGameDetails, clearGame } = useListedGames();
    const { game } = state;
    

    useEffect(() => {

      fetchGameDetails(id);
      return () => {
        clearGame();
    };
  }, [id]);

  console.log(id);
  
  return (
    <DefaultPage>
      <Paper>
        <Grid container>
          {!game ? (
            <CircularProgress />
          ) : (
            <>
              <Grid item md={4}>
                <img src={game.thumbnail} alt={game.title} />
              </Grid>
              <Grid item md={8}>
                <p> 
                  <Typography variant="h5">{game.title}</Typography>
                </p>
                <p>
                  <Typography variant="subtitle1">{game.short_description}</Typography>
                </p>
                <Divider />
                <p>
                  <Typography variant="body1">{game.description}</Typography>
                </p>
                <Divider />
                <p>
                  <Chip label={game.genre} variant="outlined" />
                </p>
              </Grid>
              <Button variant="contained" onClick={navigateToGames}>
                GAMES
              </Button>
            </>
          )}
        </Grid>
      </Paper>
    </DefaultPage>
  );
};

export default DetailedGame;