import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      textAlign: "center",
      padding:"4%",
      borderColor:"white",
      height:"64px",
      width: "64px"
    }
  })
);
//styling for Paper
function PageContentPC() {

    const classes = useStyles(); //styles for Paper component
    const [content, setContent] = useState(<Container fluid className="becomeMember">
    <div className="inline">
    <div className="combine">
    <Grid container spacing={1}  style={{paddingLeft: "7.8%"}}>
    <Grid item md={12} lg={6} sm={12} xs={12}> 
    <div className="wrap">
    <h1 className="title title1">Student <br/> Developers <br/>Initiative.</h1>
    </div>
    </Grid>
    <Grid item md={12} lg={12} sm={12} xs={12}>
    <div className="sub">
    <h2>&lt;We dream tech /&gt;</h2>
    </div>
    </Grid>
    </Grid>
</div>
</div>
<br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/>
 <div className="becomeMember">
    <Grid container spacing={1}>
    <Grid item md={12} lg={6} sm={12} xs={12}>
    <div className="wrap"><h1 className="title2 text title">Become a member.</h1></div>
    </Grid>
    <Grid item md={6} lg={6}>
         <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent"}}></Paper>
    </Grid>
    {/* Spacing */}
    <Grid item md={12} lg={12} sm={12} xs={12}>
    <Button 
    variant="contained" 
    className="register" 
    size="sm"
    ><a href='https://pages.razorpay.com/sdiclub'><img src={"img/group1.png"} alt="SDIlogo"></img></a></Button>
    </Grid>
    </Grid>
    </div>
</Container>)
     
 return(content);
}
export default PageContentPC;
