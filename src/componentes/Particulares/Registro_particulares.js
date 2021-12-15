import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Select } from "@material-ui/core";
import { NativeSelect } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { makeStyles } from "@material-ui/core/styles";
import  { useState } from "react";
import { Modal, Button, Grid } from "@material-ui/core";


function RegistroParticulares() {
  const useStyles = makeStyles((theme) => ({
    tf: {
      position: "absolute",
      width: "1000px",
      height: "400px",
      overflow: "scroll",
      backgroundColor: "white",
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3, 4),
      top: "100px",
      left: "100px",
      display: "block",
    },
    textfield: {
      width: "100%",
    },
    
  }));
 
    const styles = useStyles();
  
    const [tf, setTf] = useState(false);
  
    const abrircerrarTf = () => {
      setTf(!tf);
    };
  














































  

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };










  

  return (
    <div>
      <h1>Nuevo Particular</h1>
      <hr id="hr"></hr>
      <Box sx={{ display: "flex", flexWrap: "wrap", width: 1000, }}>
        <div>
          <TextField
            label="Nombre(s)"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <TextField
              label="Apellido paterno"
              id="outlined-adornment-weight"
            />
            <FormHelperText id="outlined-weight-helper-text">
              linea de ayuda prueba
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <TextField
              label="apellido Materno"
              id="outlined-adornment-weight"
            />
          </FormControl>
        </div>
        <div>
          <TextField
            label="Correo electrónico"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <TextField label="Teléfono" id="outlined-adornment-weight" />
            <FormHelperText id="outlined-weight-helper-text">
              linea de ayuda prueba
            </FormHelperText>
          </FormControl>
        </div>
        <br></br>
        <div>
          <FormControl sx={{ width: "27ch" }} margin="normal">
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Razón social
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "RS",
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>Física</option>
              <option value={20}>Moral</option>
            </NativeSelect>
          </FormControl>
          <TextField
            label="Contacto"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <TextField label="RFC" id="outlined-adornment-weight" />
            <FormHelperText id="outlined-weight-helper-text">
              linea de ayuda prueba
            </FormHelperText>
          </FormControl>
        




















      <Grid item >
                                <TextField
                                    id="date"
                                    label="FECHA DE REGISTRO"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    sx={{ width: '50%' }}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                                
                            </Grid>
        </div>
        <div>
          <h5>Domicilio</h5>
          <TextField
            label="Calle"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <TextField label="Número" id="outlined-adornment-weight" />
            <FormHelperText id="outlined-weight-helper-text">
              linea de ayuda prueba
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <TextField label="Colonia" id="outlined-adornment-weight" />
          </FormControl>
        </div>
        <div>
          <TextField
            label="Código postal"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <TextField label="País" id="outlined-adornment-weight" />
            <FormHelperText id="outlined-weight-helper-text">
              linea de ayuda prueba
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <TextField label="País" id="outlined-adornment-weight" />
            <FormHelperText id="outlined-weight-helper-text">
              linea de ayuda prueba
            </FormHelperText>
          </FormControl>
        </div>
        <div>
          <TextField
            label="Estado"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <TextField label="Municipio" id="outlined-adornment-weight" />
            <FormHelperText id="outlined-weight-helper-text">
              linea de ayuda prueba
            </FormHelperText>
          </FormControl>
          <Button type='submit' color='primary' variant='raised'>Guardar</Button>
        </div>
      </Box>
    </div>
  );
}
export default RegistroParticulares;

