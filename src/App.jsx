import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carta from "./Carta.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carta" element={<Carta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
