import React, { useState } from 'react';

import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

import Tabs from '../UI/Tabs/Tabs';

import './ConsultaLicitacion.css';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));

const skeletonDefault = (
  <div>
    <Skeleton width={'50%'} style={{ justifyContent: "center", display: "flex" }} />
    <Skeleton animation="wave" width={300} justifyContent="center" />
    <Skeleton animation="wave" width={300} style={{textAlign: 'center'}}  />
    <Skeleton animation="wave" width={100} justifyContent="center" />
    <Skeleton animation="wave" width={100} justifyContent="center" />
    <Skeleton animation="wave" width={400} justifyContent="center" />
    <Skeleton animation={false} width={500}  />
    <Skeleton variant="rectangular" height={500} style={{textAlign: 'center'}} />
  </div>
);


const ConsultaLicitacion = (props) => {
  const [dataOfId,setDataOfId] = useState(skeletonDefault);
  const [loading, setLoading] = useState(true);
  
  if(props.idData){
    if(loading){
      setTimeout(
        function() {
          console.log("consulta licitacion -->", props.idData);
          const dataComponent = (
            <div>
              <Typography variant="h4" gutterBottom component="div" style={{textAlign: 'center'}} >
                Titulo de la licitación
              </Typography>
              <Typography variant="h5" gutterBottom component="div" style={{textAlign: 'center'}}>
                0.977619331653774
              </Typography>
              <br/>
              <Typography gutterBottom>
                  <label className="labelLlave"> Fecha registro: </label>
                  <label className="labelValue">01/Enero/2021</label>
                  <br/>
                  <label className="labelLlave"> Fecha registro: </label>
                  <label className="labelValue">01/Enero/2021</label>
              </Typography>
              <Typography gutterBottom>
                  <label className="labelLlave"> Área: </label>
                  <label className="labelValue">OIC - Órgano Interno de Control</label>
                  <br/>
                  <label className="labelLlave"> Etapa actual: </label>
                  <label className="labelValue"> Registro</label>
                  <br/>
                  <label className="labelLlave"> Responsable: </label>
                  <label className="labelValue"> Nombre del responsable </label>
              </Typography>
              <Divider textAlign="left">
                <Typography variant="h6" gutterBottom component="div">
                    Objetivo
                </Typography>
              </Divider>
              <label className="labelValue">
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
              </label>
              <Tabs>

              </Tabs>
            </div>
          );
          setDataOfId(dataComponent)
          setLoading(false);
      }.bind(this), 2000);
    }
  }
  
  return (
    <Root>
      {dataOfId}
    </Root>
  );
}

export default ConsultaLicitacion;