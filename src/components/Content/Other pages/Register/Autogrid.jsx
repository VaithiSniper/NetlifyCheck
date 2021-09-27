import React from "react";
import { makeStyles, createStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useMediaPredicate } from "react-media-hook";
import FormHeading from '../../Forms/FormHeading';
import Button from '@mui/material/Button';
import { styled } from '@mui/styles';
import axios from 'axios';

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
  const largeBoxesStyling2 = {display:"flex",left:"0",width:"100%"}//for >1000px styling for USN,mobile,domain,email ID
  const smallBoxesStyling = {width:"70%"}//for <1000px styling for fName, Lname
  //Boxes styling for different fields

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
        if (!values.phone) {

          errors.phone = 'Required';

        }
        else if(values.phone.length!==10) {

          errors.phone = 'Enter a valid 10 digit phone number';
        }
        

        return errors;

      }}

      onSubmit={(values, { setSubmitting }) => {
          
        //   //values are received here
        //   let config = {
        //   headers: {
        //     header1:{'Content-Type':'application/json'}
        //  }
        //  }

        //   let data = {
        //   // eslint-disable-next-line no-restricted-globals
        //   'HTTP_CONTENT_LANGUAGE': self.language
        //   }
        //   console.log(JSON.stringify(values, null, 2))
        //   axios.post('http://localhost:5000/register/formData',JSON.stringify(values, null, 2)).then(console.log("posted"))
        //   setSubmitting(false);

        // }, 10000);
        // //sent to backend
        // // eslint-disable-next-line no-restricted-globals
        // window.location.replace('/payment');
        setTimeout(() => {
alert(JSON.stringify(values, null, 2));
setSubmitting(false);
}, 10000);
      }}

    >
    

      {({ isSubmitting,isValid,dirty,errors }) => (
       
     
      <Form>
      <Grid container spacing={1} style={{textAlign:'center'}}>
      <Grid item md={7} lg={7}>
      <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent"}}></Paper>
      </Grid>
      {/* Padding grid */}
      <Grid item xs={12} lg={3}>
      <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>   
      <FormHeading content="Registration Form"  styles={{fontSize:"30%"}}/>
      </Paper>
      </Grid>
      </Grid>
      {/* Heading row */}
      <Grid container spacing={1}>
          {/* ROW 1 */}
          <Grid item md={6} lg={6}>
         <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent"}}></Paper>
         </Grid>
         {/* Padding grid */}
         <Grid item xs={12} md={6} lg={3}>
          <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>   
          <Field  name="fName" as="input"  placeholder="First Name" style={smallerThan1000?smallBoxesStyling:largeBoxesStyling1}/>
          </Paper>
         </Grid>
         <Grid item xs={12} md={6} lg={3}>
          <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>   
           <Field as="input"  name="lName" placeholder="Last Name" style={smallerThan1000?smallBoxesStyling:largeBoxesStyling1}/>
          </Paper>
         </Grid>

          {/* ROW 2 */}
          <Grid item md={6} lg={6}>
         <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent"}}></Paper>
         </Grid>
           {/* Padding grid */}
         <Grid item xs={12} lg={3}>
          <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>   
          <Field as="input" name="USN" placeholder="USN" style={smallerThan1000?smallBoxesStyling:largeBoxesStyling2}/>
          </Paper>
         </Grid>

          {/* ROW 3 */}
          <Grid item md={6} lg={6}>
         <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent"}}></Paper>
         </Grid>
          {/* Padding grid */}
          <Grid item xs={12} md={6} lg={3}>
          <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>  
          <Field as="select" name="semester" style={smallerThan1000?smallBoxesStyling:largeBoxesStyling1}>
          <option value="" disabled>Semester</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          </Field>
          </Paper>
         </Grid>
         <Grid item xs={12} md={6} lg={3}>
         <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>  
          <Field as="select" name="section" style={smallerThan1000?smallBoxesStyling:largeBoxesStyling1}>
          <option value="" disabled>Section</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
          </Field>
          </Paper>
         </Grid>

         {/* ROW 4 */}
         <Grid item md={6} lg={6}>
         <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent"}}></Paper>
         </Grid>
           {/* Padding grid */}
         <Grid item xs={12} lg={3}>
          <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>   
          <Field as="input" name="phone" placeholder="Mobile No." style={smallerThan1000?smallBoxesStyling:largeBoxesStyling2}/>
          <ErrorMessage component="div" name="phone"/>
          </Paper>
         </Grid>

          {/* ROW 5 */}
          <Grid item md={6} lg={6}>
         <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent"}}></Paper>
         </Grid>
           {/* Padding grid */}
         <Grid item xs={12} lg={3}>
          <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>   
          <Field as="select" name="domainOfInterest" style={smallerThan1000?smallBoxesStyling:largeBoxesStyling2}>
          <option value="" disabled>Domain of interest</option>
          <option value="A">App development</option>
          <option value="B">Web development</option>
          <option value="C">Competetive programming</option>
          <option value="D">Data Science</option>
          </Field>
          </Paper>
         </Grid>

          {/* ROW 6 */}
            <Grid item md={6} lg={6}>
         <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent"}}></Paper>
         </Grid>
           {/* Padding grid */}
         <Grid item xs={12} lg={3}>
          <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>   
          <Field type="email" name="email" placeholder="Email address" style={smallerThan1000?smallBoxesStyling:largeBoxesStyling2}/>
          <ErrorMessage component="div" name="email"/>
          </Paper>
         </Grid>
 
          {/* ROW 7 */}
         <Grid item xs={1} sm={1} lg={6}>
         <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent"}}></Paper>
         </Grid>
         <Grid item xs={12} lg={6}>
          <Paper className={classes.paper} elevation={0} style={{backgroundColor:"transparent",color:"white"}}>   
          <MyButton type="submit" variant="outlined" style ={{width:"90%"}} href="/payment" disabled={isSubmitting || !isValid || !dirty}>Submit</MyButton>
          </Paper>
         </Grid>
       </Grid>
       </Form>

     
       
         
          
     
        
        
      )}

    </Formik>

  </div>
 );
}

