import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <>
      <MovieCard movie={{ title: "nun", release_date: "2021" }} />
    </>
  )
}

export default App
