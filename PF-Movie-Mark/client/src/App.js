import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import CreateAvailable from "./Components/CreateAvailable/CreateAvailable";
import SubmitFilm from "./Components/Admin/Submitfilms";
import SubmitGroceries from "./Components/Admin/SubmitGroceries";
import Products from "./Components/Products/index";
import Page404 from "./Components/Page404/Page404";
import Newsletter from "./Components/Admin/Newsletter";
import GroceriesStock from "./Components/AdminStock/GroceriesStock";
import DeleteAvailable from "./Components/AdminStock/DeleteAvailable";

function App() {
  let user = {name:''}
  if(localStorage.getItem("user")){
      user = localStorage.getItem("user");
      user = JSON.parse(user);
  }
  return (
    <CartProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/groceries" element={<Groceries />} />
            <Route path="/products" element={<Products />} />
            <Route path='/movies/:id' element={<Details movies="movies" />} />
            <Route path='/upcoming/:id' element={<Details movies="upcoming" />} />
            <Route path='/toprated/:id' element={<Details movies="toprated" />} />
            <Route path='/payment' element={!user.id?<Login/>:(user.role==='user'?<OrderSummary />:(<Navigate to="/error/404"/>))} />
            <Route path='/login' element={!user.id?<Login />:(user.role==='user'?(<Navigate to="/account"/>):(<Navigate to="/admin"/>))} />
            <Route path='/signup' element={!user.id?<SignUp />:(user.role==='user'?(<Navigate to="/account"/>):(<Navigate to="/admin"/>))} />
            <Route path='/resetpassword' element={<ResetPassword />} />
            <Route path='/validate' element={<EnterToken />} />
            <Route path='/account' element={user.role==='user'?<Settings />:(<Navigate to="/login"/>)} />
            <Route path='/user/:id' element={<MyReceipts />} />
            <Route path='/ticket/:idTicket' element={<Receipt />} />
            <Route path='/admin' element={user.role==='admin'?<Admin />:(<Navigate to="/error/404"/>)} />
            <Route path='/available' element={<CreateAvailable />} />
            <Route path='/admin/manage/films' element={user.role==='admin'?<SubmitFilm />:(<Navigate to="/error/404"/>)} />
            <Route path='/admin/manage/groceries' element={user.role==='admin'?<SubmitGroceries />:(<Navigate to="/error/404"/>)} />
            <Route path='/admin/newsletter' element={user.role==='admin'?<Newsletter/>:(<Navigate to="/error/404"/>)}/>
            <Route path="*" element={<Page404 />} />
            <Route path='groceries/update' element={<GroceriesStock />} />
            <Route path='/availables/deleteAvailable' element={<DeleteAvailable />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </CartProvider>
  );
}

export default App;
