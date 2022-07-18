import React from "react";
import { Avatar } from "primereact/avatar";

export default function Profile(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <br />
      <Avatar
        image={"/img/team/" + props.idImage + ".jpg"}
        className="mr-2"
        size="xlarge"
        shape="circle"
      />
      <ul>
        <li>
          <b>Profession:</b> {props.profession}
        </li>
        <li>
          <b>LinkedIn: </b>
          {props.linkedIn}
        </li>
        <li>
          <b>Github: </b>
          {props.github}
        </li>
      </ul>
    </>
  );
}
