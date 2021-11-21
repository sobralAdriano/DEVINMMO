import { GameCard } from "../../components/GameCard";
import { DefaultPage } from "../../templates/DefaultPage";
import { StyledButton } from "../../components/Button/Button.style";
import { Grid, CircularProgress } from "@mui/material";
import { useListedGames } from "../../PageContexts/PageContext";
import { StyledInput } from "../../components/Search/Search.styles";


export const ListedGames = () => {

    const { state } = useListedGames();
    const { games } = state;
   
    return(
    <>
        <DefaultPage>
            <StyledInput type="search" placeholder="Pesquisar Games" />
       
                <Grid container spacing={2}> 
                    {games.length > 0 ?(
                        games.map((game)=>(
                        <Grid sm={6} md={4} lg={3} key={game.id} item>    
                          <GameCard 
                            thumb = {game.thumbnail}
                            title = {game.title} 
                            description = {game.short_description} />
                          <StyledButton color="primary" variant="contained" size="large" onClick={""}>VER MAIS</StyledButton> 
                        
                    </Grid>
                    
                    ))
                    
                ): <CircularProgress />}
         
            </Grid>
        </DefaultPage>
    </>
    );

};
