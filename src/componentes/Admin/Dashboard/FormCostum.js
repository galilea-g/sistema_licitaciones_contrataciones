import React, { useState, useEffect } from "react";
import { Grid, TextField, Select, InputLabel, MenuItem, Typography} from "@mui/material";

import "./Dashboard.css";



function FormCostum(props) {

    
    const [currentValue, setCurrentValue] = useState({email:props.defaultValues.email,
                                                        name:props.defaultValues.nombre}); 


    const handler_onChange = (event) =>{

        if(event.target.id == 'email'){
            setCurrentValue({...currentValue,
                email:event.target.value
              });
        }
        else{
            setCurrentValue({...currentValue,
                name:event.target.value
              });
        }
       
    }
   

    return (
        <Grid container>
            <Grid item xs={12} sm={12} textAlign="right" m={2}>

                {props.fields.map(formItem => {
                    if (!formItem.multiple) {
                        return (<div>
                            <TextField
                                key={formItem.id}
                                id={formItem.fieldName}
                                label={formItem.label}  
                                type={formItem.type}
                                onBlur={formItem.onBlur}
                                error={!formItem.isValid} 
                                value={currentValue[formItem.fieldName]}
                                fullWidth
                                variant="standard"
                                disabled={formItem.disabled}
                                onChange={handler_onChange}

                            >
                                    

                            </TextField>
                            {!formItem.isValid &&
                                <Typography
                                    variant="p"
                                    gutterBottom
                                    component="div"
                                    style={{color:'red'}}
                                    
                                >
                                    Favor de ingresar un valor.
                                </Typography> }
                                </div>

                        )
                    }
                    else {
                        return (
                            <div style={{width: '500px'}}>
                                <InputLabel  style={{float:'left'}}id={formItem.fieldName}>{formItem.label}</InputLabel>
                                <Select
                                    key={formItem.id}

                                    margin="dense"
                                    
                                    labelId={formItem.fieldName}
                                    id={formItem.fieldName}
                                    label={formItem.label}
                                    value={formItem.enteredValue}
                                    onChange={formItem.onChange}
                                    variant="standard"
                                    fullWidth
                                >
                                    {formItem.items.map(selectItem=> {
                                        return( <MenuItem value={selectItem.value}>{selectItem.text}</MenuItem>)
                                    })}
                                </Select>

                            </div>
                        )

                    }

                })
                }


            </Grid>

        </Grid>
    );
}

export default FormCostum;

