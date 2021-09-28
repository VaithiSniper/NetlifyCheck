import React from "react";
import {useHistory} from "react-router-dom";
//React
import { makeStyles, createStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormHeading from '../../Forms/FormHeading';
import Button from '@mui/material/Button';
import { styled } from '@mui/styles';
//Material UI components
import { Formik, Form, Field, ErrorMessage} from 'formik';
import { useMediaPredicate } from "react-media-hook";
//Formik and hooks
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
//Firestore components

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAZrvXqspVdjVgWWtSmjp7UKpjHotxvJD0',
  authDomain: 'sdic-22b69.firebaseapp.com',
  projectId: 'sdic-22b69'
});
const db = getFirestore();
//Firebase setup and db reference

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      textAlign: "center",
      padding: "2% 0%"
    }
  })
);
//styling for Paper

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #B2BEB5 10%, #708090 100%)',
  border: 0,
  boxShadow: '0 3% 5% 2% rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  margin: '0 auto', 
  display: "flex"
});
//material-ui button styling


export default function AutoGrid() {

  const history = useHistory();
  const smallerThan1000 = useMediaPredicate("(max-width: 1000px)");//media-query hook  
  const largeBoxesStyling1 = {display:"flex",left:"0",width:"70%"}//for >1000px styling for fName, Lname
  const largeBoxesStyling2 = {display:"flex",left:"0",width:"100%"}//for >1000px styling for email
  const largeBoxesStyling3 = {display:"flex",left:"0",width:"100%",height:"280px",resize: "none"}//for >1000px styling for grievance
  const smallBoxesStyling = {width:"70%"}//for <1000px styling for fName, Lname, email
  const smallBoxesStyling2 = {width:"70%",height:"238px",resize: "none"}//for <1000px styling for grievance
const classes = useStyles(); //styles for Paper component
  return (
    <div>
  
    <Formik

      initialValues={{ 
        fName: '',
        lName: '',
        USN: '',
        semester: '1',
        section: 'A',
        phone: '',
        domainOfInterest: '',
        email: '', }}

      validate={values => {

        const errors = {};

        if (!values.email) {

          errors.email = 'Required';

        } else if (

          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)

        ) {

          errors.email = 'Invalid email address';

        }
        return errors;
      }}

      onSubmit={(values, { setSubmitting }) => {
        //values are received here
        //using setTimeout to give formik time to fetch data
        setTimeout(() => {
        const userData = JSON.parse(JSON.stringify(values, null, 2));
        //Store formik results in userData object
setDoc(doc(db, "grievance"), {
    fName: userData.fName,
    lName : userData.lName,
    email : userData.email,
    grievance : userData.grievance
}).then(console.log("Posted"));
//POST TO FIRESTORE
setSubmitting(false);
}, 2000);
//after 5s, page shift to payment
setTimeout(() => {
  history.push('/home')
}, 1000)
      }}
    >

      {({ isSubmitting,isValid,dirty }) => (
       
     
      <Form style={{padding:"2%"}}>
      <Grid container spacing={1} style={{textAlign:'center'}}>
      <Grid item xs={12} lg={3}>
      <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>   
      <FormHeading content="Contact Us"  styles={{fontSize:"30%"}}/>
      </Paper>
      </Grid>
      <Grid item md={7} lg={7}>
      <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent"}}></Paper>
      </Grid>
      {/* Padding grid */}
      </Grid>
      {/* Heading row */}
      <Grid container spacing={1}>
          {/* ROW 1 */}
         <Grid item xs={12} md={6} lg={3}>
          <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>   
          <Field  name="fName" as="input"  placeholder="First Name" style={smallerThan1000?smallBoxesStyling:largeBoxesStyling1} required/>
          </Paper>
         </Grid>
         <Grid item xs={12} md={6} lg={3}>
          <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>   
           <Field as="input"  name="lName" placeholder="Last Name" style={smallerThan1000?smallBoxesStyling:largeBoxesStyling1} required/>
          </Paper>
         </Grid>
         <Grid item md={6} lg={6}>
         <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent"}}></Paper>
         </Grid>
         {/* Padding grid */}
          {/* ROW 2 */}
         <Grid item xs={12} lg={6}>
          <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>   
          <Field type="email" name="email" placeholder="Email Address" required style={smallerThan1000?smallBoxesStyling:largeBoxesStyling2}/>
          <ErrorMessage component="div" name="email"/>
          </Paper>
         </Grid>
         <Grid item md={6} lg={6}>
         <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent"}}></Paper>
         </Grid>
           {/* Padding grid */}
          {/* ROW 3 */}
          <Grid item xs={12} md={6} lg={6}>
          <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>  
          <Field as="textarea" name="grievance" placeholder="Grievance" required style={smallerThan1000?smallBoxesStyling2:largeBoxesStyling3}/>
          </Paper>
         </Grid>
         <Grid item md={6} lg={6}>
         <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent"}}></Paper>
         </Grid>
          {/* Padding grid */}
         {/* ROW 4 */}
         <Grid item xs={12} md={6} lg={3}>
          <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>  
          <MyButton type="submit" variant="outlined" style ={{width:"90%"}} disabled={isSubmitting || !isValid || !dirty}>Submit</MyButton>
          </Paper>
         </Grid>
         <Grid item md={6} lg={6}>
         <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent"}}></Paper>
         </Grid>
          {/* Padding grid */}
       </Grid>
       </Form>
      )}
    </Formik>

  </div>
 );
}