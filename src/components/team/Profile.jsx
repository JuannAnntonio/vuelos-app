import React from "react";
import { Avatar } from "primereact/avatar";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";

export default function Profile(props) {
  return (
    <div className="grid flex align-items-center justify-content-center">
      <h1>{props.name}</h1>

      <div className="col-5">
        <Avatar
          image={"/img/team/" + props.idImage + ".jpg"}
          className="mr-2"
          size="xlarge"
          shape="circle"
        />
      </div>
      <div className="col-7" style={{ textAlign: "justify" }}>
        {props.resume}
      </div>
      <div className="col-12">
        <FaReact />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {props.profession}
      </div>

      <div className="col-12">
        <HiMailOpen />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {props.mail}
      </div>
      <div className="col-12">
        <BsLinkedin />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {props.linkedIn}
      </div>

      <div className="col-12">
        <BsGithub />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {props.github}
      </div>
    </div>
  );
}
