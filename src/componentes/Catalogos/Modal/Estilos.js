
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    modal: {
      position: "absolute",
      width: "40%",
      height: "55%",
      backgroundColor: "#F1F1F2",
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 2, 2, 2),
      top: "18%",
      left: "30%",
      display: "block",
      borderRadius: "12px",
    },
    textfield: {
      width: "100%",
    },
    button: {
      textAlign: "center",
      display: "flex",
      backgroundColor: "#C0F7D3",
      justify: "space-between",
      align: "center",
      width: "30%",
      height: "85px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
      padding: "0.5rem",
      margin: "1rem 0",
      borderRadius: "12px",
    },
    buttonAdd: {
      textAlign: "center",
      display: "flex",
      backgroundColor: "#dfdede",
      justify: "space-between",
      align: "center",
      width: "65%",
      height: "65px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
      padding: "0.5rem",
      margin: "1rem 0",
      borderRadius: "12px",
    },
    addlogo: {
      width: "15%",
      height: "70%",
    },
    returnimg: {
      align: "left",
      left: "50%",
      width: "50px",
    },
    content: {
      padding: "12",
      overflow: "scroll",
    },


    tuclase: {
textAlign: "center",
fontFamily: "Arial Black",  
fontSize: "30px", 
color: "BLACK", 
},


  }));


export default useStyles;