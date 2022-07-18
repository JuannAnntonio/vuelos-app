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
            name="Rouse"
            idImage="RAPR"
            profession="Ingeniero de Software"
            linkedIn="https://www.linkedin.com/in/juanperezramos/"
            github="https://github.com/JuannAnntonio"
          />
        </Card>
      </div>
      <div className="col-3 flex align-items-center justify-content-center">
        <Card>
          <Profile
            name="Pedro"
            idImage="PAPR"
            profession="Ingeniero de Software"
            linkedIn="https://www.linkedin.com/in/juanperezramos/"
            github="https://github.com/JuannAnntonio"
          />
        </Card>
      </div>
    </div>
  );
}
