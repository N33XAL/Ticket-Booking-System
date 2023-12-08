import React, { useEffect, useState } from 'react'
import './ConfirmOrder.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetails } from '../../actions/movieAction'
import { useNavigate } from 'react-router-dom'
import Header from '../header/Header'

const ConfirmOrder = () => {
    const navigate = useNavigate()

    const id = JSON.parse(localStorage.getItem("id"))
    const { price, quantity, subTotal } = JSON.parse(localStorage.getItem("obj"))
    const tax = subTotal * 0.13
    const total = subTotal - tax
    const obj = { price, quantity, subTotal, tax, total }


    const { movie } = useSelector(state => state.movieDetails)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovieDetails(id))
    }, [dispatch, id])

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        address: "",
        country: "",
    })
    const { name, email, address, country } = userData

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleClick = () => {
        localStorage.setItem("userdata", JSON.stringify(userData)) //used local storage to pass used data like name, email
        localStorage.setItem("obj", JSON.stringify(obj)) 
        navigate('/invoice')
    }
    return (
        <>
        <Header />
            <div className='main-container'>
                <div className='information-box'>
                    <form className='signup-form'>
                        <h2>Information</h2>
                        <div>
                            <FontAwesomeIcon className='login-icon' icon={faCircleUser} />
                            <input
                                type='text'
                                placeholder='Full Name'
                                name='name'
                                onChange={handleChange}
                                value={name}
                            />
                        </div>
                        <div>
                            <FontAwesomeIcon className='login-icon' icon={faEnvelope} />
                            <input
                                type='email'
                                placeholder='Email'
                                name='email'
                                onChange={handleChange}
                                value={email}
                            />
                        </div>
                        <div>
                            <FontAwesomeIcon className='login-icon' icon={faLock} />
                            <input
                                type="text"
                                placeholder='Address'
                                name='address'
                                onChange={handleChange}
                                value={address}
                            />
                        </div>
                        <div>
                            <FontAwesomeIcon className='login-icon' icon={faLock} />
                            <input
                                type="text"
                                placeholder='Country'
                                name='country'
                                onChange={handleChange}
                                value={country}
                            />
                        </div>
                    </form>
                </div>
                <div className='checkout'>
                    <h2>Checkout Summary</h2>
                    <hr></hr>
                    <h3>{movie.Title}</h3>
                    <div className='first'>
                        <p>{movie.Type}</p>
                        <p>{movie.Country}</p>
                    </div>
                    <hr></hr>
                    <div>
                        <p>Normal</p>
                        <strong>Rs. {price}</strong>
                    </div>
                    <div>
                        <p>Quantity</p>
                        <strong>{quantity}</strong>
                    </div>
                    <div>
                        <p>Sub Total</p>
                        <strong>Rs. {subTotal}</strong>
                    </div>
                    <div>
                        <p>Tax (13%)</p>
                        <strong>{tax}</strong>
                    </div>
                    <hr></hr>
                    <div>
                        <p>Total</p>
                        <strong>Rs. {total}</strong>
                    </div>
                    <hr></hr>
                    <button onClick={handleClick}>Confirm payment</button>
                </div>
            </div>
        </>
    )
}

export default ConfirmOrder
