import React, { useRef, useState, useEffect } from "react";
import { SlideMenu } from "primereact/slidemenu";
import { Button } from "primereact/button";

import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import "./MenuApp.css";

export default function MenuApp() {
    
  const [selectedTheme, setSelectedTheme] = useState(document.getElementById("app-theme"));
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
      icon: <IoIcons.IoMdSettings />,
      items: [
        {
          label: "Claro",
          icon: <BsIcons.BsSun />,
          command: () => {
            changeTheme("lara-blue");
          },
        },
        {
          separator: true,
        },
        {
          label: "Obscuro",
          icon: <BsIcons.BsFillMoonStarsFill />,
          command: () => {
            changeTheme("lara-dark");
          },
        },
      ],
    },
  ];

  
  useEffect(() => {
    const temaActual = localStorage.getItem('theme-app');
    console.log(temaActual);
    if(temaActual){
        setSelectedTheme(document.getElementById("app-theme"));
        selectedTheme.href = "/themes/" + temaActual + ".css";
            //setSelectedTheme(selectedTheme);
        localStorage.setItem('theme-app',temaActual);
        
    }else{
        setSelectedTheme(document.getElementById("app-theme"));
        selectedTheme.href = "/themes/lara-blue.css";
        localStorage.setItem('theme-app','lara-blue');
    }
  }, []); 


  function changeTheme(themeNew) {
    //console.log("CLIC TEMA," + themeNew);
    setSelectedTheme(document.getElementById("app-theme"));
    if (selectedTheme) {
        selectedTheme.href = "/themes/" + themeNew + ".css";
        //setSelectedTheme(selectedTheme);
        localStorage.setItem('theme-app',themeNew);
    }
  }

  return (
    <div className="card">
      <SlideMenu
        ref={menu}
        model={items}
        popup
        viewportHeight={220}
        menuWidth={175}
        backLabel="Regresar"
      ></SlideMenu>
      <Button
        type="button"
        icon="pi pi-bars"
        label=" Menú"
        onClick={(event) => menu.current.toggle(event)}
      ></Button>
    </div>
  );
}
