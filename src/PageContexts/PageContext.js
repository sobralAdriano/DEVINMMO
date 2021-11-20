import { createContext, useContext, useEffect, useReducer } from "react";

const pageContext = createContext();
pageContext.displayName = "Page Context";

const PageProvider = pageContext.Provider;

export const useListedGames = () => {
  const context = useContext(pageContext);
  if (!context) {
    throw new Error("Contexto só pode ser utilizado dentro do escopo ");
  }

  return context;
};

const initial_state = {
  games: [],
  game: null,
};

const reducer = (state, valueFromSetter) => {
  switch (valueFromSetter.type) {
    case "SET_GAMES":
      return { ...state, games: valueFromSetter.content };
    case "SET_GAME":
      return { ...state, game: valueFromSetter.content };
    default:
      return state;
  }
};

export const GameContex = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_state);
  
  useEffect(() => {
    const list = {
      method: "GET",
      headers: {
      "x-rapidapi-host": "mmo-games.p.rapidapi.com",
		  "x-rapidapi-key": "379f71796dmsh7b5ace8b6b873b8p1c6f56jsnd13d42edc4b8"
      },
    };

    fetch("https://mmo-games.p.rapidapi.com/games", list)
      .then((response) => response.json())
      .then((games) => dispatch({ type: "SET_GAMES", content: games }));
  }, []);



  const fetchGameDetails = (id) => {
    if (!id) return;

    const list = {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
		    "x-rapidapi-key": "379f71796dmsh7b5ace8b6b873b8p1c6f56jsnd13d42edc4b8"
      },
    };
    fetch(`https://mmo-games.p.rapidapi.com/game?id=${id}`, list)
      .then((response) => response.json())
      .then((game) => dispatch({ type: "SET_GAME", content: game }));
  };

  const clearGame = () => {
    dispatch({ type: "SET_GAME", content: null });
  };

  return <PageProvider value={{ state, fetchGameDetails, clearGame }}>{children}</PageProvider>;
};