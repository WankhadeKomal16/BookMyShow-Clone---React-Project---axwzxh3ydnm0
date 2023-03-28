import React from 'react'
import '../styles/App.css';
import Nav from "./Nav";
import Movies from './Movies';
import Genres from './Genres';
import MovieCard from './MovieCard';
import SignUp from './SignUp';
import SeatBooking from './SeatBooking';
import Checkout from './Checkout';
import Login from './Login';
import Wishlist from './Wishlist';
import AllRoutes from '../Routes/AllRoutes';
import BookingConfirmation from './BookingConfirmation';

const App = () => {


  return (
    <div id="main">
      {/* <Nav /> */}
      <AllRoutes />
      {/* <Movies /> */}
      {/* <MovieCard /> */}
      {/* <SignUp/> */}
      {/* <SeatBooking /> */}
      {/* <Checkout /> */}
      {/* <Login /> */}
      {/* <Wishlist /> */}
      {/* <BookingConfirmation/> */}
    </div>
  )
}


export default App;
