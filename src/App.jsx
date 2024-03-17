import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carta from './Carta.jsx'
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Carta/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
