import React, {useEffect, useState} from "react";
import { NewsCard } from "../../components/NewsCard";
import { Button, Grid, CircularProgress } from "@mui/material";
import { DefaultPage } from "../../templates/DefaultPage";

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
            <Grid container spacing={2}>   
                {news.length > 0 ?(
                 news.map(notice => (
                    <Grid sm={6} md={4} lg={4} key={notice.id} item>     
                        <NewsCard 
                            title = {notice.title} 
                            genre = {notice.genre} 
                            description = {notice.short_description} 
                            thumb = {notice.thumbnail}/>
                        <Button color="primary" variant="contained" size="large" onClick={""}>VER MAIS</Button>
                    </Grid>

                ))
                
                 ): <CircularProgress/> }
       
            </Grid>
        </DefaultPage>
    </>
    );

};
