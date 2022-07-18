import { Card } from "primereact/card";
import React from "react";
import Profile from "../components/team/Profile";

export default function Team() {
  return (
    <div className="grid align-items-center justify-content-center">
      <div className="col-3 flex align-items-center justify-content-center">
        <Card>
          <Profile
            name="Juan Antonio Pérez Ramos"
            idImage="JAPR"
            profession="Ingeniero de Software"
            linkedIn="https://www.linkedin.com/in/juanperezramos/"
            github="https://github.com/JuannAnntonio"
          />
        </Card>
      </div>
      <div className="col-3 flex align-items-center justify-content-center">
        <Card>
          <Profile
            name="Rosalba Fuentes Soto"
            idImage="RAPR"
            profession="Cientifíca de Datos"
            linkedIn="https://www.linkedin.com/in/rosalba-fuentes-85629193/"
            github="https://github.com/Rosalbafs"
          />
        </Card>
      </div>
      <div className="col-3 flex align-items-center justify-content-center">
        <Card>
          <Profile
            name="Pedro Emilio Guzmán García"
            idImage="PEGG"
            profession="Desarrollador Frontend"
            linkedIn="https://www.linkedin.com/in/guzmanpdro/"
            github="https://github.com/guzmanpdro"
          />
        </Card>
      </div>
    </div>
  );
}
