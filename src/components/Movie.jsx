/* eslint-disable react/prop-types */
import { motion as m } from "framer-motion";

export default function Movie({ movie }) {
  return (
    <m.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt=""
      />
    </m.div>
  );
}
