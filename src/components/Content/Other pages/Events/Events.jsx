import React, { useEffect, useState } from "react";
//react
import Grid from "@mui/material/Grid";
import Tabs from "./Tabs";
import Card from "./Card";
import Container from "react-bootstrap/Container";
//material ui imports
import "./Events.css";
//css
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
//firestore imports
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAZrvXqspVdjVgWWtSmjp7UKpjHotxvJD0",
  authDomain: "sdic-22b69.firebaseapp.com",
  projectId: "sdic-22b69",
});
//firebase and firestore setup
const db = getFirestore();
//firebase events retrival
//collection ref
async function retrival() {
  const querySnapshot = await getDocs(collection(db, "events_test"));
  let arr = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const data = doc.data();
    arr.push(data);
  });
  return arr;
}
//to retrive tabs

function Events() {
  const [tabs, setTabs] = React.useState([]);
  const [data, setData] = React.useState({});
  const selectedTab = (data) => {
    setData(data);
  };
  //to get selectedTab
  useEffect(() => {
    retrival().then((res) => {
      setTabs(res);
    });
  }, [tabs]);

  return (
    <Container>
      <h1 className='events_title'>Events</h1>
      <Grid container spacing={2}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Tabs data={tabs} selectedTab={selectedTab} />
          <Card data={data} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Events;
