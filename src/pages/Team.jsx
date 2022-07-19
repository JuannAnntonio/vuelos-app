import { Card } from "primereact/card";
import React from "react";
import Profile from "../components/team/Profile";

import { FaAngellist } from "react-icons/fa";
import { TbPokeball } from "react-icons/tb";
const Resume = (props) => {
  const { resume, icon } = props;
  return (
    <>
      <div>{resume}</div>
      {icon}
      {icon}
    </>
  );
};


export default function Team() {
  return (
    <div className="grid align-items-center justify-content-center">
      <div className="col-3 flex align-items-center justify-content-center">
        <Card>
          <Profile
            name='Juan Antonio Pérez Ramos'
            idImage="JAPR"
            resume={
              <Resume
                resume="Actualmente estudio maestria en Seguridad de TI, pertenezco al equipo de Arquitectura y Cálidad en Mercado Libre ... Amante de los videojuegos, de ver: Better Call Saul, Game of Thrones, DragonBall, Naruto, Attacks of Titans e igual que muchos quiero ver ganar al mostaza en un torneo."
                icon={<TbPokeball />}
              />
            }
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
			resume={
            <Resume
			  resume="Soy una feliz mamá, tengo un perico. Soy consultora en ITSS, llevo 4 años trabajando en empresas de software, impulso mi carrera hacia IT, estudié una maestría en Ciencia de Datos y siempre que puedo tomo bootcamps que aumenten mis habilidades."
              icon={<FaAngellist />}
			/>
			}			
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
            resume=""
            profession="Desarrollador Frontend"
            linkedIn="https://www.linkedin.com/in/guzmanpdro/"
            github="https://github.com/guzmanpdro"
          />
        </Card>
      </div>
    </div>
  );
}
