import React from 'react';
import { useMediaPredicate } from "react-media-hook";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles} from "@material-ui/core/styles";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
//npm imports

let today = new Date();
// //Date function related
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      textAlign: "center",
      justifyContentEnd: "center",
      padding:"4%"
    }
  })
);
//paper styling related
function DateComponent()
{
    return(
    <div>
    <span id="footer-date">{today.getDate()}</span>
    <span id="footer-month">{`/${today.getMonth()+1}`}</span>
    </div>)
}

function FooterMobile(){
    
    const classes = useStyles(); //styles for Paper component
    return(
        <Grid container spacing={1}>
          <Grid item sm={5} xs={5} align="center">
        <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white",paddingTop:"0",paddingBottom:"15%"}}>  
        <img height="100px" width="100px" src="img/bitlogo.png" alt="bit-logo" style={{paddingLeft:"10%"}}></img>
        </Paper>
        </Grid>
        <Grid item sm={6} xs={6} align="center">
        <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white",paddingTop:"10%",paddingBottom:"15%"}}>  
       <h5>Bangalore Institute Of Technology</h5>
        </Paper>
        </Grid>
        <Grid item sm={1} xs={1} align="center">
        <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>  
        </Paper>
        </Grid>
        <Grid item sm={12} xs={12}>
        <Divider light  sx={{ bgcolor: (theme) => "white"}} style={{marginBottom:"3%"}}></Divider>
        </Grid>
        <Grid item sm={4} xs={4} align="center">
        <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>  
        <a href="https://instagram.com/sdibangalorebit?utm_medium=copy_link"> 
        <div className="insta"></div>
        </a>
        </Paper>
        </Grid>
        <Grid item sm={4} xs={4}>
        <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>  
        <a href="https://twitter.com/sdi_bit?s=08">
        <div className="twitter"><a href="https://twitter.com/sdi_bit?s=08"/></div>
        </a>
        </Paper>
        </Grid>
        <Grid item sm={4} xs={4} align="center">
        <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}> 
        <a href="https://www.linkedin.com/company/student-developers-initiative">  
        <div className="linkedin"></div>
        </a>
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
    <Grid item md={2} lg={2}>
    <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>  
    {DateComponent()} 
    </Paper>
    </Grid>
    {/* Date grid */}
    <Grid item md={7} sm={3} xs={3}  lg={7}>
    <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent"}}></Paper>
    </Grid>
    {/* Padding grid */}
    <Grid item md={1} lg={1}>
    <Paper className={classes.paper} elevation={1} style={{backgroundColor:"transparent",color:"white"}}>
    <a href="https://instagram.com/sdibangalorebit?utm_medium=copy_link">  
    <div className="insta"></div>
    </a>
    </Paper>
    </Grid>
    <Grid item md={1} lg={1}>
    <Paper className={classes.paper} elevation={1} style={{backgroundColor:"transparent",color:"white"}}>   
    <a href="https://twitter.com/sdi_bit?s=08">
    <div className="twitter"></div>
    </a>
    </Paper>
    </Grid>
    <Grid item md={1} lg={1}>
    <Paper className={classes.paper} elevation={1} style={{backgroundColor:"transparent",color:"white"}}>   
    <a href="https://www.linkedin.com/company/student-developers-initiative">
    <div className="linkedin"></div>
    </a>
    </Paper>
    </Grid>
    {/* <div className="socials" style={{float: "right",textAlign:"center",marginRight:"10%",marginTop: "0",paddingTop: "0"}}> */}
    </Grid>
        )
}
//Component for footer on larger devices

function Foot(props){

    const smallerThan560 = useMediaPredicate("(max-width: 560px)");//media-query hook  

    return(<footer className="footer bg-transparent"> <span id="date-section">
           {smallerThan560?FooterMobile():FooterPC()}
           </span></footer>)
}
//function 
export default Foot;
//exports
