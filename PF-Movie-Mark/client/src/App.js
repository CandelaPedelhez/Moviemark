import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/Landing/Landing";
import Home from "./Components/Home/Home.jsx";
import Groceries from "./Components/Groceries/Groceries.jsx";
import Details from "./Components/Details/Details.jsx";
import { CartProvider } from './Context/CartContext';
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import "./App.css"
import EnterToken from "./Components/ResetPassword/EnterToken";
import Settings from "./Components/Settings/Settings";
import { AuthProvider } from "./Context/authContext";
import MyReceipts from "./Components/Receipts/MyReceipts"
import Receipt from "./Components/Receipts/Receipt";
import OrderSummary from "./Components/OrderSummary/OrderSummary";
import Admin from "./Components/Admin/Admin";

function App() {
  return (
    <CartProvider>
      <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path='/movies/:id' element={<Details movies="movies"/>} />
        <Route path='/upcoming/:id' element={<Details movies="upcoming"/>} />
        <Route path='/toprated/:id' element={<Details movies="toprated"/>} />
        <Route path='/payment' element={<OrderSummary/>} />
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/validate' element={<EnterToken />} />
        <Route path='/account' element={<Settings />} />
        <Route path='/user/:id' element={<MyReceipts/>} />
        <Route path='/ticket/:idTicket' element={<Receipt/>} /> 
        <Route path='/admin' element={<Admin/>} /> 
        {/* <Route path='/admin/submit' element={<Submitfilms/>} />  */}
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </CartProvider>
  );
}

export default App;
