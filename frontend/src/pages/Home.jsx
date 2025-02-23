import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "john wick", release_date: "2020" },
        { id: 2, title: "sohn wick 2", release_date: "2021" },
        { id: 3, title: "rohn wick 3", release_date: "2022" }



    ];
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