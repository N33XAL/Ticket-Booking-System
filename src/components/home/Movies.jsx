import React from 'react'
import './Movies.css'
import { useNavigate } from 'react-router-dom'


const Movies = ({ movie }) => {

  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()
    localStorage.setItem('id', JSON.stringify(movie.imdbID)) //used local storage instead of redux or useContext to access id.
    navigate("/movieDetails")
  }

  return (
    <div className='movie-card' onClick={handleClick}>
      <img style={{ height: "40vh" }} src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
    </div>
  )
}

export default Movies
