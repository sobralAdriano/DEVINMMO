import { GameCard } from "../../components/GameCard";
import { DefaultPage } from "../../templates/DefaultPage";
import { Button, Grid, CircularProgress } from "@mui/material";
import { useListedGames } from "../../PageContexts/PageContext";

export const ListedGames = () => {

    const { state } = useListedGames();
    const { games } = state;
    return(
    <>
        <DefaultPage>
            <Grid container spacing={2}> 
                {games.length > 0 ?(
                    games.map((game)=>(
                    <Grid sm={6} md={4} lg={3} key={game.id} item>    
                        <GameCard 
                            thumb = {game.thumbnail}
                            title = {game.title} 
                            description = {game.short_description} 
                            />
                            <Button color="primary" variant="contained" size="large" onClick={""}>VER MAIS</Button>
                    </Grid>
                    
                    ))
                    
                ): <CircularProgress />}
         
            </Grid>
        </DefaultPage>
    </>
    );

};
