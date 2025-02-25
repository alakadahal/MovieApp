import { createContext, useState, useEffect, useContext, use } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);
export const MovieProvider = ({ children }) => {
const [favorites, setFavorites] = useState([]);

useEffect(() => {
const favorites = localStorage.getItem("favorites");
if(storedFavs) {
setFavorites(JSON.parse(storedFavs))
}, []);

return (
<MovieContext.Provider>
{children}
</MovieContext.Provider>
);


}