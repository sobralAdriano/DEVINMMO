import {ListedGames} from "../Pages/GamesList";
import {HomePage} from '../Pages/Home'
import {ListedNews} from "../Pages/NewsList";
import DetailedGame from "../Pages/GamesDetails";


 export const routes = [
    { path: "/", exact: true, component: HomePage },
    { path: "/games/:id", exact: true, component: DetailedGame },
    { path: "/games", exact: true, component: ListedGames },
    { path: "/news", exact: true, component: ListedNews },
    
  ];

  