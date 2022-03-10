import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/Landing/Landing";
import Home from "./Components/Home";
import Groceries from "./Components/Groceries";
import Details from "./Components/Details";
import Payment from "./Components/Payment";
import { CartProvider } from './Context/CartContext';
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import "./App.css"
import ResetPassword from "./Components/ResetPassword/ResetPassword";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path='/movies/:id' element={<Details movies="movies"/>} />
        <Route path='/upcoming/:id' element={<Details movies="upcoming"/>} />
        <Route path='/toprated/:id' element={<Details movies="toprated"/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<SignUp />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
