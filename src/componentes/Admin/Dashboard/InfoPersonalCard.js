
import React, { Component } from "react";
import {    Typography, Box } from "@mui/material";
import Popup from "./FormAlert";
import "./Dashboard.css";

function InfoPersonal(props) {


  return (
    <Box textAlign='center'>
      <div className="img_title">
        <img
          className="img_usuario"
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
        ></img>
      </div>
      <div className="table_profile">
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          className="padT_50"
        >
          {props.data.nombre}
        </Typography>
        <Typography
          style={{ fontWeight: 600 }}
          variant="h6"
          gutterBottom
          component="div"
          className="padT_30"
        >
          {props.data.area}
        </Typography>
    
        <ul className="padT_20 txt-left">
          <li>
            <strong>Entidad: </strong>
            {props.data.entidad}
          </li>
          <li>
            <strong>Puesto: </strong>
            {props.data.puesto}
          </li>
          <li>
            <strong>Permisos: </strong>
            {props.data.permisos}
          </li>
          <li>
            <strong>Correo: </strong>
            {props.data.email}
          </li>
        </ul>

      </div>

    </Box>
  );
}

export default InfoPersonal;
