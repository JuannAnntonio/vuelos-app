import React from "react";
import { Card } from "primereact/card";
import { Fieldset } from "primereact/fieldset";

import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";



export default function VueloCard(props) {
  const ida = 'IDA: ' + props.departs+' | '+props.startAirport+'  '+props.endAirport;
  const regreso = 'REGRESO: ' + props.arrives+' | '+props.endAirport+'  '+props.startAirport;
  return (
    <>
      <Card>
 
          <Fieldset legend={ida}>

          <FaPlaneDeparture/>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Fieldset>
          <Fieldset legend={regreso}>
          <FaPlaneArrival/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Fieldset>
      </Card>
    </>
  );
}
