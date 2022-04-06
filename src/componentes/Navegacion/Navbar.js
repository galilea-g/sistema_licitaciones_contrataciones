import React , { useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import './Navbar.css';
import logo from '../../assets/imagenes/logo.png'
import { NavLink} from "react-router-dom";

function Navbar() {
  const theme = useTheme();
  const [isActive, setActive] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
//    <AppBar position="static" className="toolbarStyle">
     <AppBar position="static" style={{ background: '#F7F6F6' }}>
      <Toolbar className="toolbarStyle">     
          <Typography sx={{ flexGrow: 1 }}>
            <img src={logo} alt="logo" className="logo" />
          </Typography>

        <NavLink
            style={({ 
              isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "aguamarina" : "black"
              };
            }}

            className="link"
            to={`/about`}>
          Acerca de

        </NavLink>|{" "}

        <NavLink
            style={({ 
              isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : ""
              };
            }}

            className="link"
            to={`/login`}>

            Login
            </NavLink> |{" "}


        <NavLink
            style={({ 
              isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : ""
              };
            }}

            className="link"
            to={`/catalogos`}>

          Catalogos</NavLink>|{" "}

            </Toolbar>
    </AppBar>
  );
}
export default Navbar;
