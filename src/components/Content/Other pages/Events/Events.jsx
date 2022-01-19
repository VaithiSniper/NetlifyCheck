import React, {Suspense} from 'react';
//react
import Grid from "@mui/material/Grid";
import Tabs from "./Tabs";
import Card from "./Card";
import Container from 'react-bootstrap/Container';
//material ui imports
import './Events.css';
import axios from 'axios';
//css



class Events extends React.Component {

 constructor(props) {
   super(props);
   this.state = {
     currentList:null
   }
 }
 componentDidMount(){
 axios.get('https://sdi-backend-serverless.vercel.app/api/eventData').then(()=>{console.log("called")});
}
 render(){
   return(
    <Suspense
    fallback={<h1>Loading profile...</h1>}
  >
    <Container>
    <h1 className="events_title">
    Events
    </h1>
    <Grid container spacing={2}>
  <Grid item lg={12} md={12} sm={12} xs={12}>
    <Tabs names={this.state.currentList}/>
    <Card
    />
  </Grid>
</Grid>
    </Container>
    </Suspense>
    )
 }
}

export default Events;