import React from "react";
import { makeStyles, createStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Formik, Form, Field, ErrorMessage} from 'formik';
import { useMediaPredicate } from "react-media-hook";
import FormHeading from '../../Forms/FormHeading';
import Button from '@mui/material/Button';
import { styled } from '@mui/styles';

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
        
        if (!values.fName) {

          errors.fName = 'Required';

        }
        if (!values.lName) {

          errors.lName = 'Required';

        }
        if (!values.grievance) {

          errors.grievance = 'Required';

        }

        return errors;
      }}

      onSubmit={(values, { setSubmitting }) => {

        setTimeout(() => {
          
          //values are received here
          fetch(process.env.backendURL+'/register/formData',
          {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(values, null, 2)
          }).then(()=>{
            console.log("posted")
          })
          setSubmitting(false);

        }, 1000);
        //sent to backend
        // eslint-disable-next-line no-restricted-globals
        window.location.replace('/payment');
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
          <MyButton type="submit" variant="outlined" style ={{width:"90%"}} href="/payment" disabled={isSubmitting || !isValid || !dirty}>Submit</MyButton>
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