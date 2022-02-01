import {  Select, InputLabel, MenuItem, Typography} from "@mui/material";

import "./Dashboard.css";

/** 
 * 27-01-2022
 * Daniel Gutiérrez
 * Props {fieldName, type, label, onChange, enteredValue, items{value, text}}
 * Recibe configuración de uno o varios fields multiselect
 */

function MultiSelectCustom(props) {

    return (
            <div>
                {props.fields.map(formItem => {
                        return (
                            <div>
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

                })
                }
            </div>
    );
}

export default MultiSelectCustom;

