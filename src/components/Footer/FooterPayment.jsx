import React from 'react';
import { useMediaPredicate } from "react-media-hook";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles} from "@material-ui/core/styles";
import { Link } from "react-router-dom";
//npm imports

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};
//box styling

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      textAlign: "center",
      justifyContentEnd: "center",
      padding:"4%",
      color: 'white'
    }
  })
);
//paper styling related

function FooterMobile(){
    const classes = useStyles(); //styles for Paper component
    return(
        <Grid container spacing={1} style={{position: "absolute", top: "65vh"}}>
        <Grid item sm={12} xs={12} align="center">
        <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>  
        <Link to="/terms" style={{color:"white"}} target="_blank" rel="noopener noreferrer">Terms and conditions,Privacy policy and Refund policy</Link>
        </Paper>
        </Grid> 
        </Grid>
        )
}
//Component for footer on mobile devices

function FooterPC(){
    const classes = useStyles(); //styles for Paper component
    return(
      <Grid container spacing={1} style={{ position: "fixed", bottom: "0"}}>
      <Grid item lg={12} md={12} align="center">
      <Paper className={classes.paper} elevation={1} style={{backgroundColor:"transparent",color:"white"}}>  
      <Link to="/terms" style={{color:"white"}} target="_blank" rel="noopener noreferrer">Terms and conditions,Privacy policy and Refund policy</Link>
      </Paper>
      </Grid> 
      </Grid>
    
        )
}
//Component for footer on larger devices

function FootPayment(props){

    const smallerThan560 = useMediaPredicate("(max-width: 560px)");//media-query hook  

    return(<footer className="footer bg-transparent"> <span id="date-section">
           {smallerThan560?FooterMobile():FooterPC()}
           </span></footer>)
}
//function 
export default FootPayment;
//exports
