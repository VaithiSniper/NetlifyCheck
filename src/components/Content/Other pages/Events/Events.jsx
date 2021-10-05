import React from 'react';
import Box from "@material-ui/core/Box";
import Grid from "@mui/material/Grid";
import Tabs from "./Tabs";
import Card from "./Card";
import Container from 'react-bootstrap/Container';
import './Events.css';
function Events() {
   
    return(
        <Container>
        <h1 className="events_title">
        Events
        </h1>
        <Grid container spacing={2}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Tabs />
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