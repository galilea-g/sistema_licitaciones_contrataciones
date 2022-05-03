import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

import "./ConsultaParticular.css";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

const skeletonDefault = (
  <div>
    <Skeleton variant="circular" width={40} height={40} />
    <Skeleton animation="wave" width={300} justifyContent="center" />
    <Skeleton animation="wave" width={100} justifyContent="center" />
    <Skeleton animation="wave" width={400} justifyContent="center" />
  </div>
);

const ConsultaParticular = (props) => {
  const [dataOfId, setDataOfId] = useState(skeletonDefault);
  const [loading, setLoading] = useState(true);

  if (props) {
    if (loading) {
      setTimeout(
        function () {
          console.log("consulta particular -->", props.idData);
          const dataComponent = (
            <div>
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                style={{ textAlign: "center" }}
              >
                Datos de particular
              </Typography>

              <br />
              <Typography gutterBottom>
                <label className="labelLlave"> Nombre(s): </label>
                <label className="labelValue">{props.idData}</label>
                <br />
                <label className="labelLlave"> Apellido paterno: </label>
                <label className="labelValue">G</label>
              </Typography>
              <Typography gutterBottom>
                <label className="labelLlave"> Apellido materno; </label>
                <label className="labelValue">M</label>
                <br />
                <label className="labelLlave"> RFC: </label>
                <label className="labelValue"> JKHS345678</label>
                <br />
                <label className="labelLlave"> Fecha de registro: </label>
                <label className="labelValue"> 01/01/2021 </label>
                <br />
                <label className="labelLlave"> Folio: </label>
                <label className="labelValue" value="Math.random()">
                  {props.idData}
                </label>
              </Typography>
            </div>
          );
          setDataOfId(dataComponent);
          setLoading(false);
        }.bind(this),
        2000
      );
    }
  }

  return <Root>{dataOfId}</Root>;
};

export default ConsultaParticular;

