import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from "@material-ui/core/Grid";
import { styled } from '@mui/styles';
import Button from '@mui/material/Button';
import Paper from "@material-ui/core/Paper";
import { makeStyles, createStyles} from "@material-ui/core/styles";

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
//styling for Paper

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    boxShadow: '0 3% 5% 2% rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    margin: '0 auto', 
    display: "flex"
  });
//material-ui button styling

function PageContentMobile(){
    const classes = useStyles(); //styles for Paper component

    return(<div style={{margin:"7%"}}>
    <Grid container spacing={1}>
    <Grid item sm={12} xs={12}>
    <Typography sx={{color:"white"}} variant="h2">Student <br/> Developers <br/>  Initiative</Typography>
    </Grid>
    <Grid item sm={12} xs={12}>
    <Typography sx={{color:"gray"}} variant="h5">&lt;We dream tech/&gt;</Typography>
    </Grid>
    <Grid item sm={12} xs={12}>
    <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent"}}></Paper>
    </Grid>
    <Grid item sm={12} xs={12}>
    <MyButton
        variant="contained"
        size="large"
        href="/register"
        style={{color:"white"}}
        >
        Register
        </MyButton>
    </Grid>
    </Grid>
    </div>);
}
export default PageContentMobile;