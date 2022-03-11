import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/Landing/Landing";
import Home from "./Components/Home/Home.jsx";
import Groceries from "./Components/Groceries/Groceries.jsx";
import Details from "./Components/Details/Details.jsx";
import Payment from "./Components/Payment";
import { CartProvider } from './Context/CartContext';
import MyReceipts from "./Components/Receipts/MyReceipts"
import "./App.css"

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
        <Route path='/myReceipts' element={<MyReceipts/>} />
        <Route path='/myReceipts:id' element={<MyReceipts/>} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
