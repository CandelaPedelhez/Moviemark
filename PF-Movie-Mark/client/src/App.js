import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/Landing";
import Home from "./Components/Home";
import Grocerie from "./Components/Grocerie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/groceries" element={<Grocerie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
