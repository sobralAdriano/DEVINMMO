import React, {useEffect, useState} from "react";
import { NewsCard } from "../../components/NewsCard";
import { Grid, CircularProgress } from "@mui/material";
import { DefaultPage } from "../../templates/DefaultPage";
import { StyledButton } from "../../components/Button/Button.style";
import { StyledInput } from "../../components/Search/Search.styles";

export const ListedNews = () => {

    const [news,setnews] = useState([]);

    useEffect(() => {

        const options =  {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                "x-rapidapi-key": "0293d65b13msha0f561688e4235fp14fffcjsnadb07e47d4fe"
            }
        };
    fetch("https://mmo-games.p.rapidapi.com/latestnews", options).then(response=>response.json()).then(data=> setnews(data));
       
    }, [])

    
    return(
    <>
        <DefaultPage>
         <StyledInput type="search" placeholder="Pesquisar news"/>
            <Grid container spacing={2}>   
                {news.length > 0 ?(
                 news.map(notice => (
                  <>
                    <Grid sm={6} md={4} lg={4} key={notice.id} item>     
                        <NewsCard 
                            thumb = {notice.thumbnail}
                            title = {notice.title} 
                            description = {notice.short_description} 
                            />
                        <StyledButton color="primary" variant="contained" size="large" onClick={""}>VER NO SITE</StyledButton> 
                    </Grid>
                    
                  </>
                ))
                
                 ): <CircularProgress/> }
       
            </Grid>
        </DefaultPage>
    </>
    );

};
