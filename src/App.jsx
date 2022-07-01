import './App.css';

import Navbar from "./components/menu/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import Team from './pages/Team';
import Vuelos from './pages/Vuelos';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/vuelos" component={Vuelos} />
          <Route path="/team" component={Team} />
        </Switch>
      </Router>
    </div>
  );
}