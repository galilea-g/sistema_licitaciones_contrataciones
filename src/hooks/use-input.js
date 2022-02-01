import { useState } from "react";
/*  27-01-2022 
    Daniel Gutiérrez 
    Costum Hook
    Descripción: Manejo de validación y manejo de datos de formularios
*/
const useInput = (validateValue, defaultValue='') =>{ 
    const [enteredValue,setEnteredValue] = useState(defaultValue);
    const [isTouched,setIsTouched] = useState(false);
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const onValueChange = (event) =>{//Toma el valor ingresado y lo guarda en enteredValue
        setEnteredValue(event.target.value);
    };
    const onValueBlur = (event) =>{//Valida si el usuario entró y salió del input
        setIsTouched(true);
    };
    const reset =()=>{//Reinicia a los valores por defecto
        setIsTouched(false);
        setEnteredValue(defaultValue);
    };
    return { 
        value: enteredValue,
        valueIsValid:valueIsValid,
        hasError: hasError,
        onValueChange,
        onValueBlur,
        reset,
    };
};
export default useInput;