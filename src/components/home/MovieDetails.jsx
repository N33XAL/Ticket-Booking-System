import React, { useEffect, useState } from 'react'
import './MovieDetails.css'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getMovieDetails } from '../../actions/movieAction'
import Header from '../header/Header'

const MovieDetails = () => {

  const price = 500;

  const navigate = useNavigate()

  const { movie } = useSelector(state => state.movieDetails)
  const dispatch = useDispatch()

  const [quantity, setQuantity] = useState(1)

  const id = JSON.parse(localStorage.getItem("id"))

  useEffect(() => {
    dispatch(getMovieDetails(id))
  }
    , [dispatch, id])

  const incQuantity = () => {
    if (quantity >= 10) return;
    setQuantity(quantity + 1)
  }

  const decQuantity = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1)
  }

  const subTotal = price * quantity;
  const obj = { price, quantity, subTotal }

  const handleSubmit = () => {
    localStorage.setItem("obj", JSON.stringify(obj))
    navigate('/confirmOrder')
  }

  return (
    <>
      <Header />
      <div className='movieDetails-main'>
        <div className='row'>
          <div className='col-1'>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
            <p><strong>Released:</strong> {movie.Released}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>Rating:</strong> {movie.imdbRating}</p>
          </div>
          <div className='col-2'>
            <h1>Event Details</h1>
            <hr></hr>
            <div className='col-2-1'>
              <h3>Date and Time</h3>
              <p>Sat, Dec 22, 2023</p>
            </div>
            <hr></hr>
            <div className='col-2-2'>
              <h3>Location</h3>
              <p>Kathmandu, Nepal</p>
            </div>
            <hr></hr>
            <div className='col-2-3'>
              <div>
                <h2>Select Tickets</h2>
                <h3>NRP {price}</h3>
              </div>
              <div className='col-2-3-1'>
                <button onClick={decQuantity}>-</button>
                <input type='number' readOnly value={quantity} />
                <button onClick={incQuantity}>+</button>
              </div>
            </div>
            <hr></hr>
            <div>
              <button onClick={handleSubmit}>Check out for {subTotal}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieDetails
