import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movies from './Movies'
import './Home.css'
import Header from '../header/Header'

const Home = () => {

  const [data, setData] = useState("")
  useEffect(() => {
    getData()
  }
    , [])

  const getData = () => {
    axios.get('https://www.omdbapi.com/?apikey=87ede1f1&s=jaws')
      .then((response) => {
        setData(response.data.Search)
      })
      .catch(error => console.error(error))
  }

  return (
    <>
      <Header />
      <div className='movies'>
        {
          data && data.map((movie) => {
            return <Movies key={movie.imdbID} movie={movie} /> //using props to pass values to children component
          })
        }
      </div>
    </>
  )
}

export default Home
