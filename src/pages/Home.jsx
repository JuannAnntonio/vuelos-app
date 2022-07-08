import React from "react";
import Buscador from "../components/buscador/Buscador";

export default function Home() {
  return (
  <div className="home">
  <h1>Home </h1>
  <div className="grid align-items-center justify-content-center">
  <div className="col-2 flex align-items-center justify-content-center">
    <div className="p-fluid">
      <Buscador/>
    </div>
  </div>
  </div>
  </div>
  
  
  );
}
