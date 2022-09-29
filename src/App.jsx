import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./pages/Team";
import Home from "./pages/Home";
import HeaderApp from "./components/menu/HeaderApp";

export default function App() {
  return (
    <div className="App">      
      <Router>
        <HeaderApp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
}
