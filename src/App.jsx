import { useEffect } from 'react';
import './App.css'
// import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WebFont from 'webfontloader'
import Home from './components/home/Home';
import MovieDetails from './components/home/MovieDetails';
import ConfirmOrder from './components/home/ConfirmOrder';
import Invoice from './components/home/Invoice';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins', 'sans-serif']
      }
    })
  }, [])

  return (
    <>
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/movieDetails' Component={MovieDetails} />
        <Route exact path='/confirmOrder' Component={ConfirmOrder} />
        <Route exact path='/invoice' Component={Invoice} />
      </Routes>
    </Router>
    </>
  )
}

export default App
