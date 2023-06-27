import "./App.css";
import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Filter from "./components/Filter";
import { motion as m, AnimatePresence } from "framer-motion";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=141bfefa6042026a1b69a61fea4eba33&leanuage=en-US&page=1"
    );
    const movie = await data.json();
    setPopular(movie.results);
    setFiltered(movie.results);
  };

  return (
    <>
      <div>
        <Filter
          popular={popular}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <m.div layout className="popular-movies">
          <AnimatePresence>
            {filtered?.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </AnimatePresence>
        </m.div>
      </div>
    </>
  );
}

export default App;
