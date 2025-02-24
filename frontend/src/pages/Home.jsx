import MovieCard from "../components/MovieCard";
import { useState, useEffects } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }
            catch (err) {
            }
            finally { }
        };
        loadPopular
    }, [])

    const handleSearch = () => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");

    }



    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                    placeholder="Search..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(
                    (movie) => (
                        <MovieCard movie={movie} key={movie.id} />

                    ))}
            </div>
        </div>
    );
}

export default Home;