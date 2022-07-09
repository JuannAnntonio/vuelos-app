import React, { useRef,useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SlideMenu } from "primereact/slidemenu";
import { Button } from "primereact/button";
//import Navbar from "./components/menu/Navbar";
//Pages
import Team from "./pages/Team";
import Vuelos from "./pages/Vuelos";
import Home from "./pages/Home";
import Reserva from "./components/reserva/Reserva";
//iconos
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as FcIcons from "react-icons/fc";

import sagaBlue from './theme-lara-light-blue.scss';

export default function App() {
  const [selectedTheme, setSelectedTheme] = useState(sagaBlue);
  const menu = useRef(null);
  const items = [
    {
      label: "Home",
      icon: <AiIcons.AiFillHome />,
      command: (e) => {
        window.location.pathname = "/home";
      },
    },
    {
      label: "Vuelos",
      icon: <IoIcons.IoIosAirplane />,
      command: (e) => {
        window.location.pathname = "/vuelos";
      },
    },
    {
      label: "Team",
      icon: <IoIcons.IoMdPeople />,
      command: (e) => {
        window.location.pathname = "/team";
      },
    },
    {
      label: "Config",
      icon: <FcIcons.FcSettings />,
      items: [
        {
          label: "Claro",
          icon: <BsIcons.BsSun />,
          command: () => {
            changeTheme('theme-lara-light-blue');
          },
        },
        {
          separator: true,
        },
        {
          label: "Obscuro",
          icon: <BsIcons.BsFillMoonStarsFill />,
          command: () => {
            changeTheme('theme-lara-dark-blue');
          },
        },
      ],
    },
  ];

  useEffect(() => {
    const temaActual = localStorage.getItem('theme-app');
    if(temaActual){
      setSelectedTheme(temaActual);
    }
    /*if(selectedTheme){
      console.log(selectedTheme);
      selectedTheme.use();
      return () => { selectedTheme.unuse() };
    }*/
  }, []); 

  function changeTheme(theme) {
    console.log("CLIC TEMA,"+ theme);
    /*import(`./${theme}.scss`).then((module) => {
      if (selectedTheme) {
        selectedTheme.unuse();
      }
      module.use();
      setSelectedTheme(module);
    });*/
    /*let themeLink = document.getElementById('app-theme');
console.log('themeLink',themeLink);
    if (themeLink) {
      themeLink.href = theme + '.css';
    }*/
    import(`./${theme}.scss`).then(() => {
           if (selectedTheme) {
        setSelectedTheme(theme);
        localStorage.setItem('theme-app',theme)
      }
      
    });

  }

  return (
    <div className="App">
      <div className="card">
        <SlideMenu
          ref={menu}
          model={items}
          popup
          viewportHeight={220}
          menuWidth={175}
        ></SlideMenu>
        <Button
          type="button"
          icon="pi pi-bars"
          label=" Menú"
          onClick={(event) => menu.current.toggle(event)}
        ></Button>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/vuelos" element={<Vuelos />} />
          <Route path="/reserva" element={<Reserva />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
}
