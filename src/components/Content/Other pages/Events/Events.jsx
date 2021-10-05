import React from 'react';
//react
import Grid from "@mui/material/Grid";
import Tabs from "./Tabs";
import Card from "./Card";
import Container from 'react-bootstrap/Container';
//material ui imports
import './Events.css';
//css
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
//firestore imports

let events = [];
//events array
const firebaseApp = initializeApp({
    apiKey: 'AIzaSyAZrvXqspVdjVgWWtSmjp7UKpjHotxvJD0',
    authDomain: 'sdic-22b69.firebaseapp.com',
    projectId: 'sdic-22b69'
  });
  //firebase and firestore setup
  const db = getFirestore();
async function retrival()
{
//collection ref
const querySnapshot = await getDocs(collection(db, "events"));
//snapshot to use for printing
querySnapshot.forEach((doc) => {
events.push(doc.data().name);
});

}
//firebase events retrival

function Events() {
    retrival();
   //to populate array
   console.log(events);
    return(
        <Container>
        <h1 className="events_title">
        Events
        </h1>
        <Grid container spacing={2}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Tabs events={events}/>
        <Card
          name="Random"
          date="Random"
          desc="Random"
          prize="Random"
          imgUrl="Random"
        />
      </Grid>
    </Grid>
        </Container>
    )
}

export default Events;