import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/Landing";
import Home from "./Components/Home";
import Groceries from "./Components/Grocerie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/groceries" element={<Groceries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
