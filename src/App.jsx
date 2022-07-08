import Navbar from "./components/menu/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Team from './pages/Team';
import Vuelos from './pages/Vuelos';
import Home from './pages/Home';
import Reserva from "./components/reserva/Reserva";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/vuelos" element={<Vuelos/>} />
          <Route path="/reserva" element={<Reserva/>} />
          <Route path="/team" element={<Team/>} />
        </Routes>
      </Router>
    </div>
  );
}