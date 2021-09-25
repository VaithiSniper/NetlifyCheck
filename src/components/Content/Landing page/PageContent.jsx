import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import $ from 'jquery';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Link} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles} from "@material-ui/core/styles";
import { useMediaPredicate } from "react-media-hook";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      textAlign: "center",
      padding:"4%"
    }
  })
);

function PageContent() {
    
    const classes = useStyles(); //styles for Paper component
    const smallerThan560 = useMediaPredicate("(max-width: 560px)");//media-query hook  

   function handleClickDown()
    {$(".combine").slideUp(560);
    setTimeout(() => {setContent(
    <div className="becomeMember">
    <Grid container spacing={1}>
    <Grid item md={12} lg={12} sm={12} xs={12}>
    <KeyboardArrowUpIcon className="arrow-up svg_icons" onClick={handleClickUp} fontSize="large"/>
    </Grid>
    <Grid item md={12} lg={6} sm={12} xs={12}>
    <div className="wrap"><h1 class="title2 text title">Become a member.</h1></div>
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
    onClick={handleClickRegister}><Link to='/register'><img src={!smallerThan560?"img/group1.png":"img/group2.png"} alt="SDIlogo"></img></Link></Button>
    </Grid>
    </Grid>
    </div>)},900);
    }

    function handleClickRegister(req){
    
    }

    function handleClickUp(){
        $(".becomeMember").slideUp(560);
        setTimeout(() => {setContent(<Container fluid className="becomeMember">
            <div className="inline">
            <div className="combine"> 
            <div className="wrap">
            <h1 className="title title1">Student <br/> Developers <br/> Initiative.</h1>
            </div>
            <div className="sub">
            <h2>&lt;We dream tech /&gt;</h2>
            </div>

        </div>
        </div>
        <ArrowDropDownIcon className="arrow-down svg_icons" onClick={handleClickDown} fontSize="large"/>
       
        </Container>
        
        );},900)
        
    }

    const [content, setContent] = useState(<Container fluid className="becomeMember">
    <div className="inline">
    <div className="combine"> 
    <div className="wrap">
    <h1 className="title title1">Student <br/> Developers <br/> Initiative.</h1>
    </div>
    <div className="sub">
    <h2>&lt;We dream tech /&gt;</h2>
    </div>

</div>
</div>
<div style={{paddingTop:"rem"}}>
<ArrowDropDownIcon className="arrow-down svg_icons" onClick={handleClickDown} fontSize="large"/>
</div>
</Container>)
     
 return(content);
}
export default PageContent;
